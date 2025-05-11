import { View } from "react-native";
import { cn } from "@/lib/utils/ui";
import LottieView from "lottie-react-native";

interface SplashScreenAnimationProps {
  onAnimationFinish: () => void;
}

export const SplashScreenAnimation = ({
  onAnimationFinish,
}: SplashScreenAnimationProps) => {
  return (
    <View className={cn("flex-1 items-center justify-center bg-primary")}>
      <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={(isCanceled) => {
          if (!isCanceled) {
            onAnimationFinish();
          }
        }}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("@assets/animation/cocktails.json")}
      />
    </View>
  );
};
``;
