import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SignupForm from '@/features/auth/components/SignupForm';

const Signup = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignupForm />
          <div className="mt-2 flex w-full items-center">
            <Separator className="flex-1 translate-y-[2px]" />
            <span className="px-3">or</span>
            <Separator className="flex-1 translate-y-[2px]" />
          </div>
          <div>
            <Button className="mt-4 w-full" variant="secondary">
              Sign Up with Google
            </Button>
            <Button className="mt-4 w-full" variant="secondary">
              Sign Up with Facebook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
