import React from 'react';
import { View, Text, ViewProps, TextProps } from 'react-native';
import { cn } from '@/lib/utils/ui';

interface CardProps extends ViewProps {}

interface CardHeaderProps extends ViewProps {}

interface CardTitleProps extends TextProps {}

interface CardDescriptionProps extends TextProps {}

interface CardContentProps extends ViewProps {}

interface CardFooterProps extends ViewProps {}

const Card = ({ className, style, ...props }: CardProps) => {
  return (
    <View
      className={cn(
        'bg-card rounded-lg border border-border overflow-hidden',
        className
      )}
      style={style}
      {...props}
    />
  );
};

const CardHeader = ({ className, style, ...props }: CardHeaderProps) => {
  return (
    <View
      className={cn('p-6 gap-1.5', className)}
      style={style}
      {...props}
    />
  );
};

const CardTitle = ({ className, style, ...props }: CardTitleProps) => {
  return (
    <Text
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight text-card-foreground',
        className
      )}
      style={style}
      {...props}
    />
  );
};

const CardDescription = ({ className, style, ...props }: CardDescriptionProps) => {
  return (
    <Text
      className={cn(
        'text-sm text-muted-foreground',
        className
      )}
      style={style}
      {...props}
    />
  );
};

const CardContent = ({ className, style, ...props }: CardContentProps) => {
  return (
    <View 
      className={cn('p-6 pt-0', className)}
      style={style}
      {...props}
    />
  );
};

const CardFooter = ({ className, style, ...props }: CardFooterProps) => {
  return (
    <View
      className={cn(
        'flex-row items-center p-6 pt-0',
        className
      )}
      style={style}
      {...props}
    />
  );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };
