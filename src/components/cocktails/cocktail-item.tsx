import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { Cocktail } from '@/lib/data/mock-cocktails';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils/ui';

interface CocktailItemProps {
  cocktail: Cocktail;
  onPress?: (cocktail: Cocktail) => void;
}

const CocktailItem = ({ cocktail, onPress }: CocktailItemProps) => {
  return (
    <Pressable
      className={cn(
        "bg-card rounded-xl border border-border overflow-hidden active:opacity-70 flex-1"
      )}
      onPress={() => onPress?.(cocktail)}
    >
      {cocktail.imageUrl && (
        <Image
          source={{ uri: cocktail.imageUrl }}
          className="w-full h-48"
          resizeMode="cover"
        />
      )}
      <View className="p-4">
        <View className="flex-row justify-between items-start">
          <Text className="text-xl font-semibold text-card-foreground flex-1">
            {cocktail.name}
          </Text>
          <Badge
            variant={cocktail.complexity === 'easy' ? 'success' : 'danger'}
            size="sm"
          >
            {cocktail.complexity === 'easy' ? 'Łatwe' : 'Trudne'}
          </Badge>
        </View>
        
        <View className="gap-1">
          <Text className="text-sm text-muted">
            {cocktail.ingredients.slice(0, 2).join(', ')}
            {cocktail.ingredients.length > 2 ? '...' : ''}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CocktailItem;
