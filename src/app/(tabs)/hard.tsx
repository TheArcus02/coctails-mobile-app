import React from 'react';
import CocktailsList from '@/components/cocktails/cocktails-list';
import { hardCocktails } from '@/lib/data/mock-cocktails';

const HardCocktailsView = () => {
  

  return <CocktailsList cocktails={hardCocktails} />;
};

export default HardCocktailsView;
