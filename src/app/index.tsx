import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/ui/button';
import { router } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <SafeAreaView className='gap-6 flex-1 flex flex-col items-center justify-center px-5'>
      <View className='gap-2'>
        <Text className='text-4xl font-semibold text-center'>
          Welcome to the App!
        </Text>
        <Text className='text-lg leading-tight text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          dignissimos ut consequatur optio
        </Text>
      </View>
      <Button
        title='Zaczynajmy'
        variant='primary'
        onPress={() => router.replace('/(tabs)/alcohol')}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
