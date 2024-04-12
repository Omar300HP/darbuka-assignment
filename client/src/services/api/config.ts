import appConfig from 'config';
import { axiosBaseQuery } from 'libs/axios';

export const baseQueryFn = axiosBaseQuery({
  baseUrl: appConfig.baseUrl
});

enum RequestMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
  PATCH = 'patch'
}

export const queryDefinitions = {
  listBoard: () => ({
    url: appConfig.restApiRoutes.board.list(),
    method: RequestMethods.GET
  }),
  createBoard: (reqBody: BoardCreateInput) => ({
    url: appConfig.restApiRoutes.board.create(),
    method: RequestMethods.POST,
    body: reqBody
  }),
  getBoardById: (boardId: string) => ({
    url: appConfig.restApiRoutes.board.getById(boardId),
    method: RequestMethods.GET
  }),
  updateBoard: (boardId: string, reqBody: Partial<BoardCreateInput>) => ({
    url: appConfig.restApiRoutes.board.update(boardId),
    method: RequestMethods.PUT,
    body: reqBody
  }),
  deleteBoard: (boardId: string) => ({
    url: appConfig.restApiRoutes.board.delete(boardId),
    method: RequestMethods.DELETE
  }),
  createTask: (boardId: string, reqBody: TaskCreateInput) => ({
    url: appConfig.restApiRoutes.task.create(boardId),
    method: RequestMethods.POST,
    body: reqBody
  }),
  getTaskById: (boardId: string, taskId: string) => ({
    url: appConfig.restApiRoutes.task.getById(boardId, taskId),
    method: RequestMethods.GET
  }),
  updateTask: (
    boardId: string,
    taskId: string,
    reqBody: Partial<TaskCreateInput>
  ) => ({
    url: appConfig.restApiRoutes.task.update(boardId, taskId),
    method: RequestMethods.PUT,
    body: reqBody
  }),
  deleteTask: (boardId: string, taskId: string) => ({
    url: appConfig.restApiRoutes.task.delete(boardId, taskId),
    method: RequestMethods.DELETE
  })
} as const;
