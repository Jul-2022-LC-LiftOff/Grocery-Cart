package com.shopassist.shopassitapi.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToMany(mappedBy = "ingredients")
    private final List<Recipe> recipes = new ArrayList<>();

    public Ingredient() {
    }

    public Ingredient(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public List<Recipe> getRecipes() {
        return recipes;
    }

    //need toString and equals/hashCode
}

    /*
//EXTRA STUFF WE CAN ADD LATER..... I imagine most ingredient info will be added at the backend with no user interaction.

//Dietary restrictions:

    private String gluten;

    private String vegan;

    private final List<Allergen> allergens = new ArrayList<>();

    OTHER???????
     */
