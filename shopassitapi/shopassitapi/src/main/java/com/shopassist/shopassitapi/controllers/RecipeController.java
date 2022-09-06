package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.IngredientRepository;
import com.shopassist.shopassitapi.data.RecipeRepository;
import com.shopassist.shopassitapi.data.StepRepository;
import com.shopassist.shopassitapi.models.Ingredient;
import com.shopassist.shopassitapi.models.Recipe;
import com.shopassist.shopassitapi.models.Step;
import com.shopassist.shopassitapi.models.dto.RecipeIngredientDTO;
import com.shopassist.shopassitapi.models.dto.RecipeStepDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class  RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    @Autowired
    private StepRepository stepRepository;

    @GetMapping("recipes")
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    @PostMapping("recipes/addnew")
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeRepository.save(recipe);
    }

    @PutMapping("recipes/{id}/edit")
    public void editRecipe(@PathVariable("id") Integer id, @RequestBody Recipe recipe) {
        recipeRepository.save(recipe);
    }

    @DeleteMapping("recipes/{id}/delete")
    public void deleteRecipe(@PathVariable("id") Integer id) {
        recipeRepository.deleteById(id);
    }

    @PostMapping("recipes/{id}/addIngredients")
    public void addIngredientsToRecipe(@PathVariable("id") Integer recipeId, @RequestBody Integer ingredientId) {
        Optional<Recipe> recipeResult = recipeRepository.findById(recipeId);
        Recipe recipe = recipeResult.get();
        Optional<Ingredient> ingredientResult = ingredientRepository.findById(ingredientId);
        Ingredient ingredient = ingredientResult.get();
        RecipeIngredientDTO recipeIngredientDTO = new RecipeIngredientDTO();
        recipeIngredientDTO.setRecipe(recipe);
        recipeIngredientDTO.setIngredient(ingredient);
        recipe.addIngredient(ingredient);
        recipeRepository.save(recipe);
        ingredientRepository.save(ingredient);
    }

    @PostMapping("recipes/{id}/addSteps")
    public void addStepsToRecipe(@PathVariable("id") Integer recipeId, @RequestBody Integer stepId) {
        Optional<Recipe> recipeResult = recipeRepository.findById(recipeId);
        Recipe recipe = recipeResult.get();
        Optional<Step> stepResult = stepRepository.findById(stepId);
        Step step = stepResult.get();
        RecipeStepDTO recipeStepDTO = new RecipeStepDTO();
        recipeStepDTO.setRecipe(recipe);
        recipeStepDTO.setStep(step);
        recipe.addStep(step);
        recipeRepository.save(recipe);
        stepRepository.save(step);
    }

}
