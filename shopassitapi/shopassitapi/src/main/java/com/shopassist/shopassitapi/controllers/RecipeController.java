package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.RecipeRepository;
import com.shopassist.shopassitapi.models.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("recipes")
    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    @PostMapping("recipes/addnew")
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeRepository.save(recipe);
    }

    //@PutMapping("recipes")
    //updateRecipe

    //@DeleteMapping("recipes")
    //deleteRecipe;

}
