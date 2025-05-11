import { View, FlatList } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import CocktailItem from '@/components/cocktails/cocktail-item';
import { easyCocktails } from '@/lib/data/mock-cocktails';
import type { Cocktail } from '@/lib/data/mock-cocktails';

const EasyCocktailsView = () => {
  const handleCocktailPress = (cocktail: Cocktail) => {
    router.push(`/coctail/${cocktail.id}`);
  };

  return (
    <View className="flex-1 bg-background/50 px-4 pt-4">
      <FlatList
        data={easyCocktails}
        renderItem={({ item }) => (
          <CocktailItem cocktail={item} onPress={handleCocktailPress} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EasyCocktailsView;
