import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Button from "@/components/ui/button";
import { useColors } from "@/hooks/use-colors";
import { Wine } from "lucide-react-native";

const WelcomeScreen = () => {
  const { getColor } = useColors();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-between px-5 py-10">
        {/* Top Section with Icon */}
        <View className="flex-1 items-center justify-center">
          <View className="items-center pt-10">
            <View className="mb-6 h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">
              <Wine size={48} stroke={getColor("primary")} />
            </View>
          </View>

          {/* Middle Section with Text */}
          <View className="gap-3">
            <Text className="text-center text-4xl font-bold text-foreground">
              Książka barmańska
            </Text>
            <Text className="text-center text-lg text-muted">
              Odkryj i stwórz niesamowite drinki z naszą kompleksową książką
              barmańską
            </Text>
          </View>
        </View>

        {/* Bottom Section with Button */}
        <View className="w-full gap-4">
          <Button
            title="Zaczynamy"
            variant="primary"
            size="lg"
            onPress={() => router.replace("/(tabs)/easy")}
            fullWidth
          />
          <Text className="text-center text-sm text-muted">
            Twoja osobista barmana czeka
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
