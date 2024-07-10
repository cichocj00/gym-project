import { supabase } from '@/lib/supabaseClient';
import { useQuery, useQuery } from '@tanstack/react-query';

const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useGetUser = () => {
  return useQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });
};
