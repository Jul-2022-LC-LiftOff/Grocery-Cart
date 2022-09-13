package com.shopassist.shopassitapi.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Float amount;

    private String unit;

    private String ingredient;

    @ManyToMany(mappedBy = "ingredients")
    private final List<Recipe> recipes = new ArrayList<>();

    public Ingredient() {
    }

    public Ingredient(Integer id, Float amount, String unit, String ingredient) {
        this.id = id;
        this.amount = amount;
        this.unit = unit;
        this.ingredient = ingredient;
    }

    public Integer getId() {
        return id;
    }

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
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

    //need toString and equals/hashCode
}
