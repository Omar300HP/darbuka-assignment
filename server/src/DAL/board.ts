import BoardDTO from '../features/board/board.dto';
import { Board, BoardModel } from '../common/models/board';
import { NotFoundError } from '../common/errors';
import TaskDTO from '../features/board/tasks.dto';
import { Task } from '../common/models/task';

export default class BoardDAL {
  public async createBoard(board: BoardDTO): Promise<Board> {
    return (await BoardModel.create(board)).toJSON();
  }

  public async getBoardById(id: string): Promise<Board> {
    const board = await BoardModel.findById(id);

    if (!board) {
      throw new NotFoundError('Board not found');
    }

    return board.toJSON();
  }

  public async getBoardsByOwner(owner: string): Promise<Board[]> {
    return (await BoardModel.find({ owner })).map((board) => board.toJSON());
  }

  public async updateBoard(
    id: string,
    board: Partial<BoardDTO>
  ): Promise<Board> {
    const updatedBoard = await BoardModel.findByIdAndUpdate(
      { _id: id },
      board,
      {
        new: true
      }
    );

    if (!updatedBoard) {
      throw new NotFoundError('Board not found');
    }

    return updatedBoard.toJSON();
  }

  public async deleteBoard(id: string): Promise<boolean> {
    const board = await BoardModel.findByIdAndDelete(id);

    if (!board) {
      throw new NotFoundError('Board not found');
    }

    return true;
  }

  public async createTask(boardId: string, newTask: TaskDTO): Promise<Board> {
    const board = await BoardModel.findByIdAndUpdate(
      { _id: boardId },
      { $push: { myShares: newTask } },
      {
        new: true
      }
    );

    if (!board) {
      throw new NotFoundError('Board not found');
    }

    return board.toJSON();
  }

  public async getTaskById(boardId: string, taskId: string): Promise<Task> {
    const board = await BoardModel.findById(boardId);

    if (!board) {
      throw new NotFoundError('Board not found');
    }

    const task = board.toJSON().tasks?.find((t) => t.id === taskId);

    if (!task) {
      throw new NotFoundError('Task not found');
    }

    return task;
  }

  public async updateTask(
    boardId: string,
    taskId: string,
    task: Partial<TaskDTO>
  ): Promise<Task> {
    const fieldsToUpdate = Object.entries(task).reduce((acc, [key, value]) => {
      if (value) {
        const newkey: string = String(`tasks.$.${key}`);
        acc[newkey] = value;
      }

      return acc;
    }, {} as any);

    let board = await BoardModel.findOneAndUpdate(
      { _id: boardId, 'tasks._id': taskId },
      {
        $set: fieldsToUpdate
      },

      {
        new: true
      }
    );

    if (!board) {
      throw new NotFoundError('Task not found');
    }

    board = board.toJSON();

    const updatedTask = board.tasks?.find((t) => t.id === taskId);

    if (!updatedTask) {
      throw new NotFoundError('Task not found');
    }

    return updatedTask;
  }

  public async deleteTask(boardId: string, taskId: string): Promise<boolean> {
    const board = await BoardModel.findByIdAndUpdate(
      { _id: boardId },
      { $pull: { tasks: { _id: taskId } } }
    );

    if (!board) {
      throw new NotFoundError('Board not found');
    }

    return true;
  }
}
