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
  },
  success: {
    background: '#D0F8D2',
    foreground: '#26862A',
  },
} as const;

export { cn };
