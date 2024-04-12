import type TaskDTO from './tasks.dto';
import type BoardDTO from './board.dto';
import { NotFoundError } from '../../common/errors';
import BoardDAL from '../../DAL/board';
import { Board } from '../../common/models/board';
import { Task } from '../../common/models/task';

export default class BoardService {
  constructor(private readonly boardDAL: BoardDAL) {}

  public async createBoard(board: BoardDTO): Promise<Board> {
    return this.boardDAL.createBoard(board);
  }

  public async getBoardById(id: string): Promise<Board> {
    return await this.boardDAL.getBoardById(id);
  }

  public async getBoardsByOwner(owner: string): Promise<Board[]> {
    return this.boardDAL.getBoardsByOwner(owner || '');
  }

  public async updateBoard(id: string, board: BoardDTO): Promise<Board> {
    const updatedBoard = await this.boardDAL.updateBoard(id, board);

    if (!updatedBoard) {
      throw new NotFoundError('Board not found');
    }

    return updatedBoard;
  }

  public async deleteBoard(id: string): Promise<boolean> {
    return this.boardDAL.deleteBoard(id);
  }

  public async createTask(boardId: string, task: TaskDTO): Promise<Board> {
    return this.boardDAL.createTask(boardId, task);
  }

  public async getTask(boardId: string, taskId: string): Promise<Task> {
    return this.boardDAL.getTaskById(boardId, taskId);
  }

  public async updateTask(
    boardId: string,
    taskId: string,
    task: Partial<TaskDTO>
  ): Promise<Task> {
    return this.boardDAL.updateTask(boardId, taskId, task);
  }

  public async deleteTask(boardId: string, taskId: string): Promise<boolean> {
    return this.boardDAL.deleteTask(boardId, taskId);
  }
}
