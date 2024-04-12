const config = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  restApiRoutes: {
    board: {
      list: () => 'v1/boards',
      create: () => 'v1/boards',
      getById: (boardId: string) => `v1/boards/${boardId}`,
      update: (boardId: string) => `v1/boards/${boardId}`,
      delete: (boardId: string) => `v1/boards/${boardId}`
    },
    task: {
      create: (boardId: string) => `v1/boards/${boardId}/tasks`,
      getById: (boardId: string, taskId: string) =>
        `v1/boards/${boardId}/tasks/${taskId}`,
      update: (boardId: string, taskId: string) =>
        `v1/boards/${boardId}/tasks/${taskId}`,
      delete: (boardId: string, taskId: string) =>
        `v1/boards/${boardId}/tasks/${taskId}`
    }
  }
} as const;

export default config;
