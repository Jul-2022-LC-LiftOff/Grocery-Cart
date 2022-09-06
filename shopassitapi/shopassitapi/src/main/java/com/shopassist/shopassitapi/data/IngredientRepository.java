package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
}
