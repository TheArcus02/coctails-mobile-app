import React from 'react';
import { Stack } from 'expo-router';

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='alcohol'
        options={{
          title: 'Alkoholowe',
        }}
      />
      <Stack.Screen
        name='non-alcohol'
        options={{
          title: 'Bezalkoholowe',
        }}
      />
      <Stack.Screen
        name='coctail/[id]'
        options={{
          title: 'Szczegóły koktajlu',
        }}
      />
    </Stack>
  );
};

export default TabsLayout;
