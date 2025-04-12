import React from 'react';
import { Stack } from 'expo-router';
import { TopTabs } from '@/components/navigation/top-tabs';

const TabsLayout = () => {
  return (
    <TopTabs>
      <TopTabs.Screen
        name='alcohol'
        options={{
          title: 'Alkoholowe',
        }}
      />
      <TopTabs.Screen
        name='non-alcohol'
        options={{
          title: 'Bezalkoholowe',
        }}
      />
      <TopTabs.Screen
        name='coctail/[id]'
        options={{
          title: 'Szczegóły koktajlu',
        }}
      />
    </TopTabs>
  );
};

export default TabsLayout;
