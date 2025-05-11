import React, { type ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { TouchableOpacityProps } from 'react-native';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  type TextStyle,
} from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/ui';
import { useColors } from '@/hooks/use-colors';

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-lg',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'border border-border bg-card',
        secondary: 'bg-secondary text-secondary-foreground',
        neutral: 'bg-neutral text-white',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline',
        success: 'border-[0.5px] border-success-foreground bg-success text-success-foreground',
      },
      size: {
        default: 'py-4 px-6',
        sm: 'py-2 px-4',
        lg: 'py-6 px-8',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: true,
    },
  }
);

const textVariants = cva('font-medium', {
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      icon: 'text-sm',
    },
    variant: {
      primary: 'text-primary-foreground',
      destructive: 'text-destructive-foreground',
      secondary: 'text-secondary-foreground',
      neutral: 'text-primary-foreground',
      outline: 'text-accent-foreground',
      link: 'text-foreground underline',
      success: 'text-success-foreground',
      ghost: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

interface ButtonProps extends 
  TouchableOpacityProps,
  VariantProps<typeof buttonVariants> {
  title?: string;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  textClassName?: string;
  textStyle?: TextStyle;
  children?: ReactNode;
  loadingText?: string;
}

const Button = ({
  title,
  className,
  disabled,
  variant = 'primary',
  size = 'default',
  fullWidth = true,
  loading,
  loadingText,
  leadingIcon,
  trailingIcon,
  textClassName,
  textStyle,
  children,
  ...props
}: ButtonProps) => {
  const { getColor } = useColors();

  const content = (
    <>
      {loading ? (
        <View className="flex-row items-center gap-2">
          <ActivityIndicator color={getColor('foreground')} />
          {loadingText && (
            <Text
              className={cn(
                textVariants({ variant, size }),
                textClassName
              )}
              style={textStyle}
            >
              {loadingText}
            </Text>
          )}
        </View>
      ) : (
        <View className="flex-row items-center gap-2">
          {leadingIcon}
          {children || (
            title && (
              <Text
                className={cn(
                  textVariants({ variant, size }),
                  textClassName
                )}
                style={textStyle}
              >
                {title}
              </Text>
            )
          )}
          {trailingIcon}
        </View>
      )}
    </>
  );

  return (
    <TouchableOpacity
      className={cn(
        buttonVariants({ variant, size, fullWidth }),
        disabled && 'opacity-50',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </TouchableOpacity>
  );
};

export default Button;
