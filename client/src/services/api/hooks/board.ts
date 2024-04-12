import { queryDefinitions } from '../config';
import { baseApi } from '../base';

export const boardExtendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBoardList: builder.query<Board[], undefined>({
      query: () => queryDefinitions.listBoard(),
      providesTags: (result) => [
        ...(result?.map((item) => ({
          type: 'Board' as const,
          id: item.id
        })) ?? []),
        { type: 'Board' as const, id: 'LIST' }
      ]
    }),
    createBoard: builder.mutation<Board, BoardCreateInput>({
      query: (body) => queryDefinitions.createBoard(body),
      invalidatesTags: ['Board']
    }),

    getBoardById: builder.query<Board, string>({
      query: (boardId) => queryDefinitions.getBoardById(boardId),
      providesTags: (_result, _error, boardId) => [
        { type: 'Board', id: boardId }
      ]
    }),

    updateBoard: builder.mutation<
      Board,
      { boardId: string; body: Partial<BoardCreateInput> }
    >({
      query: ({ boardId, body }) => queryDefinitions.updateBoard(boardId, body),
      invalidatesTags: (_result, _error, { boardId }) => [
        { type: 'Board', id: boardId }
      ]
    }),

    deleteBoard: builder.mutation<Board[], string>({
      query: (boardId) => queryDefinitions.deleteBoard(boardId),
      invalidatesTags: (_result, _error, boardId) => [
        { type: 'Board', id: boardId }
      ]
    })
  }),
  overrideExisting: false
});

export const {
  useGetBoardListQuery,
  useCreateBoardMutation,
  useGetBoardByIdQuery,
  useUpdateBoardMutation,
  useDeleteBoardMutation
} = boardExtendedApi;
