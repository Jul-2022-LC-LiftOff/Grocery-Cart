package com.shopassist.shopassitapi.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @ManyToMany
    private final List<Ingredient> ingredients = new ArrayList<>();

    @ManyToMany
    private final List<Step> steps = new ArrayList<>();

    private String link;

    public Recipe() {
    }
    //no-args constructor

    public Recipe(Integer id, String name) {
        this.id = id;
        this.name = name;
    }
    //constructor for manual recipe entry

    public Recipe(Integer id, String name, String link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
    //constructor for recipe imported from website

    public Integer getId() {
        return id;
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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    //need toString and equals/hashCode
}
