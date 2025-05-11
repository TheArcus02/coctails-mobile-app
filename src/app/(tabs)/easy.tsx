import React from 'react';

import CocktailsList from '@/components/cocktails/cocktails-list';
import { easyCocktails } from '@/lib/data/mock-cocktails';

const EasyCocktailsView = () => {

  return <CocktailsList cocktails={easyCocktails}  />;
};

export default EasyCocktailsView;
