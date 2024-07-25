import { useGetUser } from '@/features/auth/api/getUser';

const Home = () => {
  const { data } = useGetUser();
  return (
    <div>
      <h1>Home</h1>
      {data && JSON.stringify(data)}
    </div>
  );
};

export default Home;
