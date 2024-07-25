import AuthCard from '@/features/auth/components/AuthCard';
import SigninForm from '@/features/auth/components/SigninForm';

const Signin = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AuthCard FormComponent={SigninForm} title="Sign In" />
    </div>
  );
};

export default Signin;
