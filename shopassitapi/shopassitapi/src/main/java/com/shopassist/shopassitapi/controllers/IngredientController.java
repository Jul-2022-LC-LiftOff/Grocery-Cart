package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.IngredientRepository;
import com.shopassist.shopassitapi.models.Ingredient;
import com.shopassist.shopassitapi.models.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping("ingredients")
    public List<Ingredient> getIngredients() {
        return ingredientRepository.findAll();
    }

    @PostMapping("ingredients/addnew")
    public void addIngredient(@RequestBody Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }

    @PutMapping("ingredients/{id}/edit")
    public void editIngredient(@PathVariable("id") Integer id, @RequestBody Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }

    @DeleteMapping("ingredients/{id}/delete")
    public void deleteIngredient(@PathVariable("id") Integer id) {
        ingredientRepository.deleteById(id);
    }

}
