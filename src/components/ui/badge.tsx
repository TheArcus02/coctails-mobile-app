import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { cn } from '@/lib/utils/ui';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'self-start rounded-full items-center justify-center',
  {
    variants: {
      variant: {
        default: 'bg-muted',
        primary: 'bg-primary/10',
        secondary: 'bg-secondary/10',
        success: 'bg-success/10',
        warning: 'bg-warning/10',
        danger: 'bg-destructive/10',
      },
      size: {
        sm: 'px-2.5 py-0.5',
        md: 'px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const badgeTextVariants = cva(
  'text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground',
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface BadgeProps extends ViewProps, VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

const Badge = ({ 
  variant, 
  size,
  className, 
  style, 
  children,
  ...props 
}: BadgeProps) => {
  return (
    <View
      className={cn(badgeVariants({ variant, size, className }))}
      style={style}
      {...props}
    >
      <Text className={cn(badgeTextVariants({ variant }))}>
        {children}
      </Text>
    </View>
  );
};

export { Badge, badgeVariants }; 