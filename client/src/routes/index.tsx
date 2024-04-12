import ErrorPage from '../pages/Error';
import Home from '../pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const routes = {
  home: { path: '/', nav: () => '/', element: <Home /> },
  login: { path: '/login', nav: () => '/login', element: <Home /> },
  board: {
    path: '/board/:boardId',
    nav: (boardId: string) => `/board/${boardId}`,
    element: <Home />
  },
  task: {
    path: '/board/:boardId/task/:taskId',
    nav: (boardId: string, taskId: string) =>
      `/board/${boardId}/task/${taskId}`,
    element: <Home />
  },
  notFound: { path: '*', nav: () => '*', element: <ErrorPage /> }
} as const;

const Router: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <BrowserRouter basename="/">
    <Routes>
      {Object.values(routes).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      {children}
    </Routes>
  </BrowserRouter>
);

export default Router;
