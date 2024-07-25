interface SignupFormField {
  description: string;
  label: string;
  name: 'confirmPassword' | 'email' | 'password';
  type: string;
}

interface SigninFormField {
  description: string;
  label: string;
  name: 'email' | 'password';
  type: string;
}

export const signupFields: SignupFormField[] = [
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
  {
    description: 'Confirm your password.',
    label: 'Confirm Password:',
    name: 'confirmPassword',
    type: 'password',
  },
];

export const signinFields: SigninFormField[] = [
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
