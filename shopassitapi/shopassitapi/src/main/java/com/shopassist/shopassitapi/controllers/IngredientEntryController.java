package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.IngredientEntryRepository;
import com.shopassist.shopassitapi.models.IngredientEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class IngredientEntryController {

    @Autowired
    private IngredientEntryRepository ingredientEntryRepository;

    @GetMapping("ingredientEntries")
    public List<IngredientEntry> getIngredientEntry() {
        return ingredientEntryRepository.findAll();
    }

    @PostMapping("ingredientEntries/addnew")
    public void addIngredientEntry(@RequestBody IngredientEntry ingredientEntry) {
        ingredientEntryRepository.save(ingredientEntry);
    }

    @PutMapping("ingredientEntries/{id}/edit")
    public void editIngredientEntry(@PathVariable("id") Integer id, @RequestBody IngredientEntry ingredientEntry) {
        ingredientEntryRepository.save(ingredientEntry);
    }

    @DeleteMapping("ingredientEntries/{id}/delete")
    public void deleteIngredientEntry(@PathVariable("id") Integer id) {
        ingredientEntryRepository.deleteById(id);
    }

}
