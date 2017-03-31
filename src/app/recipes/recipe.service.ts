import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
