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

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @ManyToMany(mappedBy = "ingredientEntries")
    private final List<Recipe> recipes = new ArrayList<>();

    public IngredientEntry() {
    }

    public IngredientEntry(Integer id, Integer amount, String unit, Ingredient ingredient) {
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

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    //need toString and equals/hashCode
}
