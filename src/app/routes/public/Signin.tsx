import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SigninForm from '@/features/auth/components/SigninForm';

const Signin = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SigninForm />
          <div className="mt-2 flex w-full items-center">
            <Separator className="flex-1 translate-y-[2px]" />
            <span className="px-3">or</span>
            <Separator className="flex-1 translate-y-[2px]" />
          </div>
          <div>
            <Button className="mt-4 w-full" variant="secondary">
              Sign In with Google
            </Button>
            <Button className="mt-4 w-full" variant="secondary">
              Sign In with Facebook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
