package com.shopassist.shopassitapi.models.dto;

import com.shopassist.shopassitapi.models.Ingredient;
import com.shopassist.shopassitapi.models.Recipe;

public class RecipeIngredientDTO {

    //@NotNull
    private Recipe recipe;

    //@NotNull
    private Ingredient ingredient;

    public RecipeIngredientDTO() {
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }
}
