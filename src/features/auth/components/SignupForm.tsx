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
import { signupFields } from '@/constants/forms';
import { signupSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useCreateUserWithPassword } from '../api/signupWithPassword';

const SignupForm = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signupSchema),
  });

  const {
    error,
    isError,
    mutate: createUserWithPassword,
  } = useCreateUserWithPassword();

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    createUserWithPassword({ email: values.email, password: values.password });
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        {signupFields.map((item) => (
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
        {isError && (
          <FormMessage>{error?.message || 'Something went wrong'}</FormMessage>
        )}
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
