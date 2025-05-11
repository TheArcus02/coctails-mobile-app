export interface Cocktail {
  id: string;
  name: string;
  complexity: 'easy' | 'hard';
  ingredients: string[];
  instructions: string[];
  imageUrl?: string;
}

export const mockCocktails: Cocktail[] = [
  {
    id: '1',
    name: 'Mojito',
    complexity: 'easy',
    ingredients: ['Biały rum', 'Cukier', 'Sok z limonki', 'Woda gazowana', 'Liście mięty'],
    instructions: ['Rozgnieć liście mięty z cukrem', 'Dodaj sok z limonki i rum', 'Uzupełnij wodą gazowaną'],
  },
  {
    id: '2',
    name: 'Margarita',
    complexity: 'easy',
    ingredients: ['Tequila', 'Triple sec', 'Sok z limonki', 'Sól'],
    instructions: ['Obtocz krawędź kieliszka w soli', 'Wstrząśnij składniki z lodem', 'Przecedź do kieliszka'],
  },
  {
    id: '3',
    name: 'Old Fashioned',
    complexity: 'hard',
    ingredients: ['Bourbon', 'Angostura bitters', 'Kostka cukru', 'Skórka pomarańczowa'],
    instructions: ['Rozgnieć cukier z bittersem', 'Dodaj bourbon i lód', 'Udekoruj skórką pomarańczy'],
  },
  {
    id: '4',
    name: 'Negroni',
    complexity: 'hard',
    ingredients: ['Gin', 'Campari', 'Słodki wermut'],
    instructions: ['Wymieszaj składniki z lodem', 'Przecedź do szklanki', 'Udekoruj skórką pomarańczy'],
  },
  {
    id: '5',
    name: 'Gin z Tonikiem',
    complexity: 'easy',
    ingredients: ['Gin', 'Tonic', 'Plasterek limonki'],
    instructions: ['Dodaj gin do szklanki z lodem', 'Uzupełnij tonikiem', 'Udekoruj limonką'],
  },
  {
    id: '6',
    name: 'Manhattan',
    complexity: 'hard',
    ingredients: ['Whiskey żytnia', 'Słodki wermut', 'Angostura bitters', 'Wiśnia koktajlowa'],
    instructions: ['Wymieszaj składniki z lodem', 'Przecedź do schłodzonego kieliszka', 'Udekoruj wiśnią'],
  }
]; 

export const easyCocktails = mockCocktails.filter(cocktail => cocktail.complexity === 'easy');
export const hardCocktails = mockCocktails.filter(cocktail => cocktail.complexity === 'hard');
