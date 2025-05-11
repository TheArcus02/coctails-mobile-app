import { useColorScheme } from 'react-native';
import { colors } from '@/lib/utils/ui';

type ColorName = 
  | 'primary'
  | 'background'
  | 'foreground'
  | 'card'
  | 'card-foreground'
  | 'border'
  | 'muted'
  | 'muted-foreground'
  | 'success'
  | 'success-foreground';

export const useColors = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getColor = (name: ColorName): string => {
    switch (name) {
      case 'primary':
        return isDark ? colors.primary[500] : colors.primary[600];
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
        return colors.success.background;
      case 'success-foreground':
        return colors.success.foreground;
      default:
        return colors.neutral.black;
    }
  };

  return {
    getColor,
    isDark,
    colors: {
      primary: getColor('primary'),
      background: getColor('background'),
      foreground: getColor('foreground'),
      card: getColor('card'),
      cardForeground: getColor('card-foreground'),
      border: getColor('border'),
      muted: getColor('muted'),
      mutedForeground: getColor('muted-foreground'),
      success: getColor('success'),
      successForeground: getColor('success-foreground'),
    },
  };
};
