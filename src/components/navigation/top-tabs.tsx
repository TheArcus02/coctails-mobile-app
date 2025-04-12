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

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

type TopTabsProps = React.ComponentProps<typeof MaterialTopTabs>;

const TopTabs = (props: TopTabsProps) => {
  return (
    <MaterialTopTabs
      // screenOptions={{
      //   tabBarActiveTintColor: colors.foreground,
      //   tabBarInactiveTintColor: colors.muted,
      //   tabBarLabelStyle: {
      //     fontWeight: "bold",
      //   },
      //   tabBarIndicatorStyle: {
      //     backgroundColor: hexColors.primary,
      //   },
      //   tabBarStyle: {
      //     backgroundColor: colors.card,
      //   },
      //   tabBarPressColor: hexColors.neutral300,
      // }}
      {...props}
    />
  );
};

TopTabs.Screen = MaterialTopTabs.Screen;

export { TopTabs };
