import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { useGetUser } from '../api/getUser';

const Guard = () => {
  const { data, isPending, isSuccess } = useGetUser();

  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return isSuccess && data ? <Outlet /> : <Navigate to="/signin" />;
};

export default Guard;
