import { View, Text, ScrollView, StatusBar, Pressable, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { mockCocktails } from '@/lib/data/mock-cocktails';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Timer, MessageSquare } from 'lucide-react-native';
import { useColors } from '@/hooks/use-colors';
import { TimerModal } from '@/components/features/timer/timer-modal';
import { FloatingButton } from '@/components/ui/floating-button';
import * as SMS from 'expo-sms';

const CocktailDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const cocktail = mockCocktails.find((c) => c.id === id);
  const { getColor }  = useColors();
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [activeTimer, setActiveTimer] = useState<number>(0);

  if (!cocktail) {
    return null;
  }

  const handleShareIngredients = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const message = `Składniki na ${cocktail.name}:\n\n${cocktail.ingredients.join('\n')}`;
      await SMS.sendSMSAsync([], message);
    } else {
      Alert.alert('SMS is not available on this device');
    }
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />
      
      {/* Image Header */}
      <View className="h-72 w-full relative">
        <Image 
          source={{ uri: cocktail.imageUrl }} 
          className="w-full h-full"
          style={{ resizeMode: 'cover' }}
        />
        <View className="absolute inset-0 bg-black/40" />
        
        {/* Back Button */}
        <SafeAreaView className="absolute top-0 left-0 right-0" edges={['top']}>
          <Pressable 
            onPress={() => router.back()}
            className="w-10 h-10 ml-4 mt-2 items-center justify-center rounded-full bg-background/10 active:opacity-70"
          >
            <ArrowLeft size={24} color="white" />
          </Pressable>
        </SafeAreaView>

        {/* Title */}
        <View className="absolute bottom-0 left-0 right-0 p-6">
          <Text className="text-2xl font-semibold text-white">
            {cocktail.name}
          </Text>
        </View>
      </View>

      <ScrollView 
        className="flex-1 px-4" 
        showsVerticalScrollIndicator={false}
        contentContainerClassName="py-4 gap-2 pb-24"
      >
        {/* Complexity Badge */}
        <View className="mb-2">
          <Badge
            variant={cocktail.complexity === 'easy' ? 'success' : 'danger'}
          >
            {cocktail.complexity === 'easy' ? 'Łatwe' : 'Trudne'}
          </Badge>
        </View>

        {/* Ingredients Card */}
        <Card>
          <Card.Header>
            <Card.Title>Składniki</Card.Title>
          </Card.Header>
          <Card.Content className="gap-3">
            {cocktail.ingredients.map((ingredient, index) => (
              <View key={index} className="flex-row items-center gap-3">
                <View className="w-2 h-2 rounded-full bg-primary" />
                <Text className="text-base text-card-foreground flex-1">
                  {ingredient}
                </Text>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* Instructions Card */}
        <Card>
          <Card.Header>
            <Card.Title>Instrukcje</Card.Title>
          </Card.Header>
          <Card.Content className="gap-6">
            {cocktail.instructions.map((instruction, index) => (
              <View key={index} className="flex-row gap-4">
                <View className="items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <Text className="text-sm font-semibold text-primary">
                    {index + 1}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base text-card-foreground">
                    {instruction.text}
                  </Text>
                  {instruction.time && (
                    <Pressable 
                      className="flex-row items-center gap-2 mt-2 py-2 px-3 rounded-md bg-primary/10 self-start active:opacity-70"
                      onPress={() => {
                        if (instruction.time) {
                          setActiveTimer(instruction.time);
                          setIsTimerVisible(true);
                        }
                      }}
                    >
                      <Timer size={16} className="text-primary" stroke={getColor('primary')} />
                      <Text className="text-sm font-medium text-primary">
                        {instruction.time} sekund
                      </Text>
                    </Pressable>
                  )}
                </View>
              </View>
            ))}
          </Card.Content>
        </Card>
      </ScrollView>
      <TimerModal 
        isVisible={isTimerVisible}
        onClose={() => setIsTimerVisible(false)}
        initialDuration={activeTimer}
      />
      <FloatingButton 
        icon={MessageSquare}
        onPress={handleShareIngredients}
      />
    </View>
  );
};

export default CocktailDetailsScreen;
