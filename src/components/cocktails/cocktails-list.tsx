import { View, FlatList, useWindowDimensions } from 'react-native';
import React from 'react';
import CocktailItem from '@/components/cocktails/cocktail-item';
import type { Cocktail } from '@/lib/data/mock-cocktails';
import { router } from 'expo-router';

interface CocktailsListProps {
  cocktails: Cocktail[];
}

const CocktailsList = ({ cocktails }: CocktailsListProps) => {
  const { width } = useWindowDimensions();
  const gap = 16;
  const itemWidth = (width - (gap * 3)) / 2; 

  const handleCocktailPress = (cocktail: Cocktail) => {
    router.push(`/coctail/${cocktail.id}`);
  };

  return (
    <View className="flex-1 bg-background/50 px-4 pt-4">
      <FlatList
        data={cocktails}
        renderItem={({ item }) => (
          <View style={{ width: itemWidth }}>
            <CocktailItem cocktail={item} onPress={handleCocktailPress} />
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          gap: gap,
          paddingBottom: gap,
        }}
      />
    </View>
  );
};

export default CocktailsList; 