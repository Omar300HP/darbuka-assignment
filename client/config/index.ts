const config = {
  baseUrl: process.env.VITE_API_BASE_URL || 'http://localhost:5000',
  restApiRoutes: {
    board: {
      list: () => '/board',
      create: () => '/board',
      getById: (boardId: string) => `/board/${boardId}`,
      update: (boardId: string) => `/board/${boardId}`,
      delete: (boardId: string) => `/board/${boardId}`
    },
    task: {
      create: (boardId: string) => `/board/${boardId}/task`,
      getById: (boardId: string, taskId: string) =>
        `/board/${boardId}/task/${taskId}`,
      update: (boardId: string, taskId: string) =>
        `/board/${boardId}/task/${taskId}`,
      delete: (boardId: string, taskId: string) =>
        `/board/${boardId}/task/${taskId}`
    }
  }
} as const;

export default config;
