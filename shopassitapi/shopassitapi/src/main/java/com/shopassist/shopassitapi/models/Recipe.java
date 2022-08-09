package com.shopassist.shopassitapi.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe {

    @Id
    @GeneratedValue
    private int id;

    private String name;

    @ManyToMany
    private final List<Ingredient> ingredients = new ArrayList<>();

    @ManyToMany
    private final List<Step> steps = new ArrayList<>();

    //link to website

    public Recipe() {
    }

    public Recipe(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void addIngredient(Ingredient ingredient) {
        this.ingredients.add(ingredient);
    }

    public List<Step> getSteps() {
        return steps;
    }

    public void addStep(Step step) {
        this.steps.add(step);
    }

    //need toString and equals/hashCode
}
