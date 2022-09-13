package com.shopassist.shopassitapi.models.dto;

import com.shopassist.shopassitapi.models.Recipe;
import com.shopassist.shopassitapi.models.Step;

public class RecipeStepDTO {

    //@NotNull
    private Recipe recipe;

    //@NotNull
    private Step step;

    public RecipeStepDTO() {
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Step getStep() {
        return step;
    }

    public void setStep(Step step) {
        this.step = step;
    }
}
