import { Stack } from 'expo-router';
import '../styles.css';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar />
      <Stack>
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
            headerShown: false,
            title: 'Tabs',
          }}
        />
      </Stack>
    </>
  );
}
