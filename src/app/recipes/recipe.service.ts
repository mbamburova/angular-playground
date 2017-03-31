import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Zucchini Corn Dalia Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Zucchini-corn-dalia-recipe.jpg'),

    new Recipe('Vermicelli Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Vermicelli-upma-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); // return a new array a copy
  }
}
