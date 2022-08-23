package com.shopassist.shopassitapi.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class IngredientEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer amount;

    private String unit;


    private String ingredient;

    @ManyToMany(mappedBy = "ingredientEntries")
    private final List<Recipe> recipes = new ArrayList<>();

    public IngredientEntry() {
    }

    public IngredientEntry(Integer id, Integer amount, String unit, String ingredient) {
        this.id = id;
        this.amount = amount;
        this.unit = unit;
        this.ingredient = ingredient;
    }

    public Integer getId() {
        return id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

/*
    public List<Recipe> getRecipes() {
        return recipes;
    }
*/

    //need toString and equals/hashCode
}
