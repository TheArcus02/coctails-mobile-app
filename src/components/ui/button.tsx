import type { VariantProps } from 'class-variance-authority';
import type { TouchableOpacityProps } from 'react-native';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/ui';

const buttonVariants = cva(
  'flex w-full flex-row items-center justify-center rounded-lg py-4',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'border border-border bg-card',
        secondary: 'bg-secondary text-secondary-foreground',
        neutral: `bg-neutral text-white`,
        ghost: '',
        link: '',
        success:
          'border-[0.5px] border-success-foreground bg-success text-success-foreground',
      },
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariants>;

const getTextVariantStyles = (variant: ButtonVariant['variant']) => {
  switch (variant) {
    case 'primary':
      return 'text-primary-foreground';
    case 'destructive':
      return 'text-destructive-foreground';
    case 'secondary':
      return 'text-secondary-foreground';
    case 'neutral':
      return 'text-primary-foreground';
    case 'outline':
      return 'text-accent-foreground';
    case 'link':
      return 'underline text-lg text-foreground';
    case 'success':
      return 'text-success-foreground';
    default:
      return 'text-background';
  }
};

interface ButtonProps extends TouchableOpacityProps, ButtonVariant {
  title: string;
  loading?: boolean;
}

const Button = ({
  title,
  className,
  disabled,
  variant,
  loading,
  ...props
}: ButtonProps) => {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      className={cn(
        disabled && 'opacity-80',
        buttonVariants({ variant, className })
      )}
      disabled={disabled}
      {...props}
    >
      {loading ? <ActivityIndicator style={{ marginRight: 6 }} /> : null}
      <Text
        className={cn('text-lg font-medium', getTextVariantStyles(variant))}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
