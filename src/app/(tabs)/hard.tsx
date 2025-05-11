import { View, FlatList } from 'react-native';
import React from 'react';
import CocktailItem from '@/components/cocktails/cocktail-item';
import { hardCocktails } from '@/lib/data/mock-cocktails';

const HardCocktailsView = () => {

  return (
    <View className="flex-1 bg-background/50 px-4 pt-4">
      <FlatList
        data={hardCocktails}
        renderItem={({ item }) => <CocktailItem cocktail={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HardCocktailsView;
