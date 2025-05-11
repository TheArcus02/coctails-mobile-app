import { useColorScheme } from 'react-native';
import { colors } from '@/lib/utils/ui';

type ColorName = 
  | 'primary'
  | 'primary-foreground'
  | 'background'
  | 'foreground'
  | 'card'
  | 'card-foreground'
  | 'border'
  | 'muted'
  | 'muted-foreground'
  | 'success'
  | 'success-foreground'
  | 'warning'
  | 'warning-foreground'
  | 'destructive'
  | 'destructive-foreground';

export const useColors = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getColor = (name: ColorName): string => {
    switch (name) {
      case 'primary':
        return isDark ? colors.primary[500] : colors.primary[600];
      case 'primary-foreground':
        return colors.primary.background;
      case 'background':
        return isDark ? colors.neutral[900] : colors.neutral[100];
      case 'foreground':
        return isDark ? colors.neutral.white : colors.neutral.black;
      case 'card':
        return isDark ? colors.neutral[800] : colors.neutral.white;
      case 'card-foreground':
        return isDark ? colors.neutral.white : colors.neutral.black;
      case 'border':
        return isDark ? colors.neutral[700] : colors.neutral[300];
      case 'muted':
        return isDark ? colors.neutral[500] : colors.neutral[700];
      case 'muted-foreground':
        return isDark ? colors.neutral.white : colors.neutral.white;
      case 'success':
        return isDark ? colors.success[500] : colors.success[600];
      case 'success-foreground':
        return colors.success.background;
      case 'warning':
        return isDark ? colors.warning[500] : colors.warning[600];
      case 'warning-foreground':
        return colors.warning.background;
      case 'destructive':
        return isDark ? colors.destructive[500] : colors.destructive[600];
      case 'destructive-foreground':
        return colors.destructive.background;
      default:
        return colors.neutral.black;
    }
  };

  return {
    getColor,
    isDark,
    colors: {
      primary: getColor('primary'),
      primaryForeground: getColor('primary-foreground'),
      background: getColor('background'),
      foreground: getColor('foreground'),
      card: getColor('card'),
      cardForeground: getColor('card-foreground'),
      border: getColor('border'),
      muted: getColor('muted'),
      mutedForeground: getColor('muted-foreground'),
      success: getColor('success'),
      successForeground: getColor('success-foreground'),
      warning: getColor('warning'),
      warningForeground: getColor('warning-foreground'),
      destructive: getColor('destructive'),
      destructiveForeground: getColor('destructive-foreground'),
    },
  };
};
