import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Cocktail } from '@/lib/data/mock-cocktails';
import { cn } from '@/lib/utils/ui';

interface CocktailItemProps {
  cocktail: Cocktail;
  onPress?: (cocktail: Cocktail) => void;
}

const CocktailItem = ({ cocktail, onPress }: CocktailItemProps) => {
  return (
    <Pressable
      className="p-4 bg-card rounded-xl mb-3 border border-border active:opacity-70"
      onPress={() => onPress?.(cocktail)}
    >
      <View className="space-y-3">
        <View className="flex-row justify-between items-start">
          <Text className="text-xl font-semibold text-card-foreground flex-1">
            {cocktail.name}
          </Text>
          <View
            className={cn(
              'px-3 py-1 rounded-full',
              cocktail.complexity === 'easy' 
                ? 'bg-primary/10 text-primary' 
                : 'bg-accent/10 text-accent'
            )}
          >
            <Text className="text-xs font-medium">
              {cocktail.complexity.toUpperCase()}
            </Text>
          </View>
        </View>
        
        <View className="space-y-1">
          <Text className="text-sm text-muted-foreground">
            {cocktail.ingredients.slice(0, 2).join(', ')}
            {cocktail.ingredients.length > 2 ? '...' : ''}
          </Text>
          <Text className="text-xs text-muted-foreground/70">
            {cocktail.instructions[0]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CocktailItem;
