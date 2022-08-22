package com.shopassist.shopassitapi.models.dto;

import com.shopassist.shopassitapi.models.IngredientEntry;
import com.shopassist.shopassitapi.models.Recipe;

import java.util.Optional;

public class RecipeIngredientEntryDTO {

    //@NotNull
    private Recipe recipe;

    //@NotNull
    private IngredientEntry ingredientEntry;

    public RecipeIngredientEntryDTO() {
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public IngredientEntry getIngredientEntry() {
        return ingredientEntry;
    }

    public void setIngredientEntry(IngredientEntry ingredientEntry) {
        this.ingredientEntry = ingredientEntry;
    }
}
