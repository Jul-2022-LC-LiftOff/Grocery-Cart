package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.IngredientEntryRepository;
import com.shopassist.shopassitapi.data.RecipeRepository;
import com.shopassist.shopassitapi.data.StepRepository;
import com.shopassist.shopassitapi.models.IngredientEntry;
import com.shopassist.shopassitapi.models.Recipe;
import com.shopassist.shopassitapi.models.dto.RecipeIngredientEntryDTO;
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
/*
    @PostMapping("recipes/addIngredients")
    public void addIngredientsToRecipe(Integer recipeId, Integer ingredientEntryId) {
        Optional<Recipe> recipeResult = recipeRepository.findById(recipeId);
        Recipe recipe = recipeResult.get();

        Optional<IngredientEntry> ingredientEntryResult = ingredientEntryRepository.findById(ingredientEntryId);
        IngredientEntry ingredientEntry = ingredientEntryResult.get();

        RecipeIngredientEntryDTO recipeIngredientEntry = new RecipeIngredientEntryDTO();
        recipeIngredientEntry.setRecipe(recipe);
        recipeIngredientEntry.setIngredientEntry(ingredientEntry);
    }

*/

}
