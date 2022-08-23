package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.IngredientEntryRepository;
import com.shopassist.shopassitapi.data.RecipeRepository;
import com.shopassist.shopassitapi.data.StepRepository;
import com.shopassist.shopassitapi.models.IngredientEntry;
import com.shopassist.shopassitapi.models.Recipe;
import com.shopassist.shopassitapi.models.Step;
import com.shopassist.shopassitapi.models.dto.RecipeIngredientEntryDTO;
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
    private IngredientEntryRepository ingredientEntryRepository;

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

    @PutMapping("recipes/{id}/addIngredients")
    public void addIngredientsToRecipe(@PathVariable("id") Integer recipeId, @RequestBody Integer ingredientEntryId) {
        Optional<Recipe> recipeResult = recipeRepository.findById(recipeId);
        Recipe recipe = recipeResult.get();
        Optional<IngredientEntry> ingredientEntryResult = ingredientEntryRepository.findById(ingredientEntryId);
        IngredientEntry ingredientEntry = ingredientEntryResult.get();
        RecipeIngredientEntryDTO recipeIngredientEntryDTO = new RecipeIngredientEntryDTO();
        recipeIngredientEntryDTO.setRecipe(recipe);
        recipeIngredientEntryDTO.setIngredientEntry(ingredientEntry);
        recipe.addIngredientEntry(ingredientEntry);
        recipeRepository.save(recipe);
    }

    @PutMapping("recipes/{id}/addSteps")
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
    }

}
