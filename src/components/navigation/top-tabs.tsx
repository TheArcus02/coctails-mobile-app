import type {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import type {
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColors } from '@/hooks/use-colors';

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

type TopTabsProps = React.ComponentProps<typeof MaterialTopTabs>;

const TopTabs = (props: TopTabsProps) => {
  const { colors } = useColors();

  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: colors.foreground,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: {
          fontWeight: "600",
          textTransform: "none",
          fontSize: 14,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 2,
        },
        tabBarStyle: {
          backgroundColor: colors.card,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        },
        tabBarPressColor: colors.muted,
      }}
      {...props}
    />
  );
};

TopTabs.Screen = MaterialTopTabs.Screen;

export { TopTabs };
