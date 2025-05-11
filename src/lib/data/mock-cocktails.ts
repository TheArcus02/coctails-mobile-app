export interface Cocktail {
  id: string;
  name: string;
  complexity: 'easy' | 'hard';
  ingredients: string[];
  instructions: {
    text: string;
    time?: number; // time in seconds
  }[];
  imageUrl?: string;
}

export const mockCocktails: Cocktail[] = [
  {
    id: '1',
    name: 'Mojito',
    complexity: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1024',
    ingredients: ['Biały rum', 'Cukier', 'Sok z limonki', 'Woda gazowana', 'Liście mięty'],
    instructions: [
      { text: 'Rozgnieć liście mięty z cukrem', time: 30 },
      { text: 'Dodaj sok z limonki i rum' },
      { text: 'Uzupełnij wodą gazowaną' }
    ],
  },
  {
    id: '2',
    name: 'Margarita',
    complexity: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?q=80&w=1024',
    ingredients: ['Tequila', 'Triple sec', 'Sok z limonki', 'Sól'],
    instructions: [
      { text: 'Obtocz krawędź kieliszka w soli' },
      { text: 'Wstrząśnij składniki z lodem', time: 20 },
      { text: 'Przecedź do kieliszka' }
    ],
  },
  {
    id: '3',
    name: 'Old Fashioned',
    complexity: 'hard',
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1024',
    ingredients: ['Bourbon', 'Angostura bitters', 'Kostka cukru', 'Skórka pomarańczowa'],
    instructions: [
      { text: 'Rozgnieć cukier z bittersem', time: 15 },
      { text: 'Dodaj bourbon i lód' },
      { text: 'Udekoruj skórką pomarańczy' }
    ],
  },
  {
    id: '4',
    name: 'Negroni',
    complexity: 'hard',
    imageUrl: 'https://images.unsplash.com/photo-1576874240748-125dd9d6a62d?q=80&w=1024',
    ingredients: ['Gin', 'Campari', 'Słodki wermut'],
    instructions: [
      { text: 'Wymieszaj składniki z lodem', time: 25 },
      { text: 'Przecedź do szklanki' },
      { text: 'Udekoruj skórką pomarańczy' }
    ],
  },
  {
    id: '5',
    name: 'Gin z Tonikiem',
    complexity: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?q=80&w=1024',
    ingredients: ['Gin', 'Tonic', 'Plasterek limonki'],
    instructions: [
      { text: 'Dodaj gin do szklanki z lodem' },
      { text: 'Uzupełnij tonikiem' },
      { text: 'Udekoruj limonką' }
    ],
  },
  {
    id: '6',
    name: 'Manhattan',
    complexity: 'hard',
    imageUrl: 'https://images.unsplash.com/photo-1609951651973-03b4c838b0d2?q=80&w=1024',
    ingredients: ['Whiskey żytnia', 'Słodki wermut', 'Angostura bitters', 'Wiśnia koktajlowa'],
    instructions: [
      { text: 'Wymieszaj składniki z lodem', time: 30 },
      { text: 'Przecedź do schłodzonego kieliszka' },
      { text: 'Udekoruj wiśnią' }
    ],
  }
]; 

export const easyCocktails = mockCocktails.filter(cocktail => cocktail.complexity === 'easy');
export const hardCocktails = mockCocktails.filter(cocktail => cocktail.complexity === 'hard');
