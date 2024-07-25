import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signinFields } from '@/constants/forms';
import { signinSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useSigninWithPassword } from '../api/signinWithPassword';

const SigninForm = () => {
  const form = useForm<z.infer<typeof signinSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signinSchema),
  });

  const {
    error,
    isError,
    mutate: signinWithPassword,
  } = useSigninWithPassword();

  const onSubmit = (values: z.infer<typeof signinSchema>) => {
    signinWithPassword({ email: values.email, password: values.password });
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        {signinFields.map((item) => (
          <FormField
            control={form.control}
            key={item.name}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input {...field} type={item.type} />
                </FormControl>
                <FormDescription>{item.description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {isError && <FormMessage>{error?.message}</FormMessage>}
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SigninForm;
