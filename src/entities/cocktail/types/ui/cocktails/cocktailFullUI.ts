export type CocktailFullUI = {
  id: string;
  name: string;
  tags: string | null;
  category: string;
  iba: string | null;
  alcoholic: string;
  glass: string;
  instructions: string;
  image: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
};
