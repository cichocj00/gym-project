import { supabase } from '@/lib/supabaseClient';
import { queryKeys } from '@/lib/tags';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    toast.error(error.message);
  }

  return data;
};

export const useGetUser = () => {
  return useQuery({
    queryFn: getUser,
    queryKey: [queryKeys.user],
  });
};
