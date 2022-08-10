package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.Ingredient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {
}
