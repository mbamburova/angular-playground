import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Zucchini Corn Dalia Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Zucchini-corn-dalia-recipe.jpg'),

    new Recipe('Vermicelli Recipe', 'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/Vermicelli-upma-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
