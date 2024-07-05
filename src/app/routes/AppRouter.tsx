import LoadingSpinner from '@/components/LoadingSpinner';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// const LazyHomepage = React.lazy(() => import('./Homepage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route element={<LazyHomepage />} path="/" /> */}
      <Route
        lazy={async () => {
          const { Homepage } = await import('./Homepage');
          return { Component: Homepage };
        }}
        path="/"
      />
    </>,
  ),
);

const AppRouter = () => {
  return (
    <RouterProvider fallbackElement={<LoadingSpinner />} router={router} />
  );
};

export default AppRouter;
