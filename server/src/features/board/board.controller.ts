import { Request, Controller, Route, Get, Post, Path, Put, Delete } from 'tsoa';
import BoardService from './board.service';
import BoardDAL from '../../DAL/board';
import { Board, BoardCreateInput } from '../../common/models/board';
import { Task, TaskCreateInput } from '../../common/models/task';

@Route('/v1/boards')
// @Security("jwt_auth")
// @Response("401", "JWT token is missing or invalid")
export class BoardController extends Controller {
  boardService: BoardService;
  constructor() {
    super();
    this.boardService = new BoardService(new BoardDAL());
  }

  @Get()
  public async listBoards(@Request() request: any): Promise<Board[]> {
    const boards = await this.boardService.getBoardsByOwner(
      request?.user?.id || ''
    );

    if (boards.length === 0) {
      await this.boardService.createBoard({
        name: 'Default Board',
        owner: request?.user?.id || '',
        description: 'This is your default board, you can create more boards!',
        tasks: [
          {
            title: 'Pending Task',
            description: 'This is your pending task',
            order: 0,
            status: 'pending',
            assigneeId: '',
            assigneeName: ''
          },
          {
            title: 'Completed Task',
            description: 'This is your completed task',
            order: 0,
            status: 'completed',
            assigneeId: '',
            assigneeName: ''
          }
        ]
      });
    }
    return await this.boardService.getBoardsByOwner(request?.user?.id || '');
  }

  @Post()
  public async createBoard(@Request() request: any): Promise<Board> {
    const newBoard: BoardCreateInput = request.body;

    return await this.boardService.createBoard(newBoard);
  }

  @Get('/{boardId}')
  public async getBoardById(@Path() boardId: string): Promise<Board> {
    return await this.boardService.getBoardById(boardId);
  }

  @Put('/{boardId}')
  public async updateBoard(
    @Path() boardId: string,
    @Request() request: any
  ): Promise<Board> {
    return await this.boardService.updateBoard(boardId, request.body);
  }

  @Delete('/{boardId}')
  public async deleteBoard(
    @Path() boardId: string,
    @Request() request: any
  ): Promise<Board[]> {
    await this.boardService.deleteBoard(boardId);

    return await this.boardService.getBoardsByOwner(request.user.id || '');
  }

  @Post('/{boardId}/tasks')
  public async createTask(
    @Path() boardId: string,
    @Request() request: any
  ): Promise<Board> {
    const newTask: TaskCreateInput = request.body;
    return await this.boardService.createTask(boardId, newTask);
  }

  @Get('/{boardId}/tasks/{taskId}')
  public async getTask(
    @Path() boardId: string,
    @Path() taskId: string
  ): Promise<Task> {
    return await this.boardService.getTask(boardId, taskId);
  }

  @Put('/{boardId}/tasks/{taskId}')
  public async updateTask(
    @Path() boardId: string,
    @Path() taskId: string,
    @Request() request: any
  ): Promise<Task> {
    return await this.boardService.updateTask(boardId, taskId, request.body);
  }

  @Delete('/{boardId}/tasks/{taskId}')
  public async deleteTask(
    @Path() boardId: string,
    @Path() taskId: string
  ): Promise<Board> {
    await this.boardService.deleteTask(boardId, taskId);

    return await this.boardService.getBoardById(boardId);
  }
}
