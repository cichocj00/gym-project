import { supabase } from '@/lib/supabaseClient';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface UserData {
  email: string;
  password: string;
}

const signinWithPassword = async (userData: UserData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useSigninWithPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signinWithPassword,
    onError: (error: Error) => {
      alert(error.message);
    },
    onSuccess: () => {
      console.log('Signin successful');
      navigate('/dashboard/home');
    },
  });
};
