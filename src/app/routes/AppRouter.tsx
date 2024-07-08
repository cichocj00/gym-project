import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Homepage = React.lazy(() => import('./Homepage'));
const Signup = React.lazy(() => import('./Signup'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Homepage />} path="/" />
      <Route element={<Signup />} path="/signup" />
    </>,
  ),
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
