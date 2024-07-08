interface FormField {
  description: string;
  label: string;
  name: 'email' | 'password';
  type: string;
}

export const signupFields: FormField[] = [
  {
    description: 'Enter your email address.',
    label: 'Email:',
    name: 'email',
    type: 'email',
  },
  {
    description: 'Enter your password.',
    label: 'Password:',
    name: 'password',
    type: 'password',
  },
];
