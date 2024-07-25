import AuthCard from '@/features/auth/components/AuthCard';
import SignupForm from '@/features/auth/components/SignupForm';

const Signup = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AuthCard FormComponent={SignupForm} title="Sign Up" />
    </div>
  );
};

export default Signup;
