import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Homepage = React.lazy(() => import('./Homepage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Homepage />} path="/" />
    </>,
  ),
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
