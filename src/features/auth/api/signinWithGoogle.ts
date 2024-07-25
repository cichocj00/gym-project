import { supabase } from '@/lib/supabaseClient';
import { useMutation } from '@tanstack/react-query';

const signinWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    options: {
      redirectTo: `${window.location.origin}/dashboard/home`,
    },
    provider: 'google',
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useSigninWithGoogle = () => {
  return useMutation({
    mutationFn: signinWithGoogle,
  });
};
