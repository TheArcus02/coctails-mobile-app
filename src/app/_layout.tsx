import { Stack } from 'expo-router';
import '../styles.css';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

export default function RootLayout() {
  return (
    <>
      <StatusBar />
      <Stack screenOptions={{
        headerShadowVisible: false,
      }}>
        <Stack.Screen
          name='index'
          options={{
            headerShown: false,
            title: 'Welcome',
          }}
        />
        <Stack.Screen
          name='(tabs)'
          options={{
            title: 'Tabs',
          }}
        />
        <Stack.Screen
          name='coctail/[id]'
          options={{
            title: 'Cocktail',
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
