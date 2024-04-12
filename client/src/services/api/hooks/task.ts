import { queryDefinitions } from '../config';
import { baseApi } from '../base';

export const taskExtendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation<
      Task,
      { body: TaskCreateInput; boardId: string }
    >({
      query: ({ body, boardId }) => queryDefinitions.createTask(boardId, body)
    }),

    getTaskById: builder.query<Task, { taskId: string; boardId: string }>({
      query: ({ taskId, boardId }) =>
        queryDefinitions.getTaskById(boardId, taskId),
      providesTags: (_result, _error, { taskId }) => [
        { type: 'Task', id: taskId }
      ]
    }),

    updateTask: builder.mutation<
      Task,
      {
        body: Partial<TaskCreateInput>;
        taskId: string;
        boardId: string;
      }
    >({
      query: ({ taskId, body, boardId }) =>
        queryDefinitions.updateTask(boardId, taskId, body),
      invalidatesTags: (_result, _error, { boardId }) => [
        { type: 'Board', id: boardId }
      ]
    }),

    deleteTask: builder.mutation<
      Task[],
      {
        taskId: string;
        boardId: string;
      }
    >({
      query: ({ taskId, boardId }) =>
        queryDefinitions.deleteTask(boardId, taskId),
      invalidatesTags: (_result, _error, { taskId }) => [
        { type: 'Task', id: taskId }
      ]
    })
  }),
  overrideExisting: false
});

export const {
  useCreateTaskMutation,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taskExtendedApi;
