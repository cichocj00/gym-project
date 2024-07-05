import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: number;
}

const LoadingSpinner = ({
  className,
  size = 24,
  ...props
}: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={cn('animate-spin', className)}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      <span>Loading</span>
    </div>
  );
};

export default LoadingSpinner;
