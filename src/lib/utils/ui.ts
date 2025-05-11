import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: Parameters<typeof cx>) => twMerge(cx(inputs));

export const colors = {
  neutral: {
    black: '#0B0D0D',
    900: '#151616',
    800: '#1B1E1F',
    700: '#374041',
    500: '#788283',
    300: '#E0EBEC',
    100: '#EBEFEF',
    white: '#F8FBFC',
  },
  primary: {
    600: '#F15A24', // Orange for light mode
    500: '#FF6B35', // Orange for dark mode
    background: '#FFF4ED', // Light orange background
  },
  success: {
    600: '#26862A', // Dark green for light mode
    500: '#2EA132', // Light green for dark mode
    background: '#D0F8D2',
  },
  warning: {
    600: '#D97706', // Dark amber for light mode
    500: '#F59E0B', // Light amber for dark mode
    background: '#FEF3C7',
  },
  destructive: {
    600: '#991B1B', // Dark red for light mode
    500: '#B91C1C', // Light red for dark mode
    background: '#FEE2E2',
  },
} as const;

export { cn };
