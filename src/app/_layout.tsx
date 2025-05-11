import { Stack } from "expo-router";

import "../styles.css";

import * as React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { SplashScreenAnimation } from "@/components/features/splash-screen/splash-screen-animation";
import { useColors } from "@/hooks/use-colors";

export default function RootLayout() {
  const { getColor } = useColors();
  const [isLoading, setIsLoading] = React.useState(true);

  if (isLoading) {
    return (
      <SplashScreenAnimation onAnimationFinish={() => setIsLoading(false)} />
    );
  }

  return (
    <>
      <StatusBar />
      <Animated.View entering={FadeIn} className="flex-1">
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: getColor("card"),
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              title: "Welcome",
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              title: "Książka barmańska",
            }}
          />
          <Stack.Screen
            name="coctail/[id]"
            options={{
              title: "Cocktail",
              headerShown: false,
            }}
          />
        </Stack>
      </Animated.View>
    </>
  );
}
