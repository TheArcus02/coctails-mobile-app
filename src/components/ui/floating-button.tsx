import { Pressable } from 'react-native';
import { cn } from '@/lib/utils/ui';
import { LucideIcon } from 'lucide-react-native';

interface FloatingButtonProps {
  icon: LucideIcon;
  onPress: () => void;
  className?: string;
}

export const FloatingButton = ({
  icon: Icon,
  onPress,
  className,
}: FloatingButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "absolute bottom-4 right-4 w-14 h-14 rounded-full bg-primary items-center justify-center shadow-lg active:opacity-70",
        className
      )}
    >
      <Icon size={24} stroke="white" />
    </Pressable>
  );
}; 