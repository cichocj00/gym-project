import { supabase } from '@/lib/supabaseClient';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface UserData {
  email: string;
  password: string;
}

const createUser = async (userData: UserData) => {
  const { data, error } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useCreateUserWithPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      navigate('/signin');
    },
  });
};
