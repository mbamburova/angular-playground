import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  // event
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Zucchini Corn Dalia Recipe',
      'Yumyyy!!!',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Zucchini-corn-dalia-recipe.jpg',
    [
      new Ingredient('Pasta', 1),
      new Ingredient('Corn', 3)
    ]),

    new Recipe(
      'Vermicelli Recipe',
      'Delicious recipe :)',
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Vermicelli-upma-recipe.jpg',
    [
      new Ingredient('Vermicelli pasta', 2),
      new Ingredient('carrot', 4)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // return a new array a copy
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecite(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
