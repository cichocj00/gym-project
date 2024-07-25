import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { useSigninWithGoogle } from '../api/signinWithGoogle';

interface AuthCardProps {
  FormComponent: React.ComponentType;
  title: string;
}

const AuthCard = ({ FormComponent, title }: AuthCardProps) => {
  const { mutate: signinWithGoogle } = useSigninWithGoogle();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <FormComponent />
        <div className="mt-2 flex w-full items-center">
          <Separator className="flex-1 translate-y-[2px]" />
          <span className="px-3">or</span>
          <Separator className="flex-1 translate-y-[2px]" />
        </div>
        <div>
          <Button
            className="mt-4 w-full"
            onClick={() => signinWithGoogle()}
            variant="secondary"
          >
            Sign In with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthCard;
