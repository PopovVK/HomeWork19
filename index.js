class Recipe {
  constructor(name, ingredients, instructions, cookingTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.cookingTime = cookingTime;
  }

  isValid() {
    return (
      typeof this.name === "string" &&
      Array.isArray(this.ingredients) &&
      this.ingredients.every((ingredient) => typeof ingredient === "string") &&
      typeof this.instructions === "string" &&
      typeof this.cookingTime === "number" &&
      this.cookingTime > 0
    );
  }
}

class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    if (recipe.isValid()) {
      this.recipes.push(recipe);
    }
  }

  findRecipesByCookingTime(maxCookingTime) {
    return this.recipes.filter(
      (recipe) => recipe.cookingTime <= maxCookingTime
    );
  }

  findRecipesByIngredients(searchIngredients) {
    return this.recipes.filter((recipe) =>
      searchIngredients.every((ingredient) =>
        recipe.ingredients.includes(ingredient)
      )
    );
  }
}

// Створення екземплярів класу Recipe
const recipe1 = new Recipe(
  "Рецепт 1",
  ["лук", "колбаса"],
  "Інструкції для рецепта 1",
  30
);

const recipe2 = new Recipe(
  "Рецепт 2",
  ["перец", "соль"],
  "Інструкції для рецепта 2",
  60
);

const recipe3 = new Recipe(
  "Рецепт 3",
  ["картопля", "морква"],
  "Інструкції для рецепта 3",
  120
);

const recipe4 = new Recipe(
  "Рецепт 4",
  ["капуста", "картопля", "морква"],
  "Інструкції для рецепта 4",
  90
);

const recipe5 = new Recipe(
  "Невалідний рецепт",
  ["лук", 12345],
  "Неправильні інструкції",
  -10
);

// Створення екземпляру класу RecipeBook
const recipeBook = new RecipeBook();

// Додавання рецептів до книги рецептів
recipeBook.addRecipe(recipe1);
recipeBook.addRecipe(recipe2);
recipeBook.addRecipe(recipe3);
recipeBook.addRecipe(recipe4);
recipeBook.addRecipe(recipe5);

// Пошук рецептів за часом
const maxCookingTime = 120;
const recipesByCookingTime = recipeBook.findRecipesByCookingTime(
  maxCookingTime
);

// Виведення результатів пошуку за часом
const recipeNamesByCookingTime = recipesByCookingTime.map((recipe) => recipe.name);
console.log(`Рецепти з часом приготування до ${maxCookingTime} хвилин: ${recipeNamesByCookingTime.join(", ")}`);

// Пошук рецептів за інгредієнтами
const searchIngredients = ["картопля", "морква"];
const recipesByIngredients = recipeBook.findRecipesByIngredients(
  searchIngredients
);

// Виведення результатів пошуку за інгредієнтами
const recipeNamesByIngredients = recipesByIngredients.map((recipe) => recipe.name);
console.log(`Рецепти з інгредієнтами ${searchIngredients.join(", ")}: ${recipeNamesByIngredients.join(", ")}`);

