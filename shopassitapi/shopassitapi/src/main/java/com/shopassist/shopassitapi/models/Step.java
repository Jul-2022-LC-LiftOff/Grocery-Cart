package com.shopassist.shopassitapi.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Step {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String step;
    //this will be the written out description of the step, such as "put in oven for 45 minutes"

    @ManyToMany(mappedBy = "steps")
    private final List<Recipe> recipes = new ArrayList<>();

    public Step() {
    }

    public Step(String step) {
        this.step = step;
    }

    public String getStep() {
        return step;
    }

    public void setStep(String step) {
        this.step = step;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    //need toString and equals/hashCode
}
