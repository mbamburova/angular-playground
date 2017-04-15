import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor (private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-udemy-recipe-project.firebaseio.com/recipes.json',
    this.recipeService.getRecipes());
  }

  getrecipes() {
    this.http.get('https://ng-udemy-recipe-project.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const data: Recipe[] = response.json();
          this.recipeService.setRecipes(data);
        }
      );
  }
}
