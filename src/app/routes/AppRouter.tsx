import Guard from '@/features/auth/components/Guard';
import React, { Suspense } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Homepage = React.lazy(() => import('./public/Homepage'));
const Signup = React.lazy(() => import('./public/Signup'));
const Signin = React.lazy(() => import('./public/Signin'));
const Home = React.lazy(() => import('./private/Home'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Homepage />} path="/" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Signin />} path="/signin" />
      <Route element={<Guard />}>
        <Route
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
          path="/dashboard/home"
        />
      </Route>
    </>,
  ),
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
