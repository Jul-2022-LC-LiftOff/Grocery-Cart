package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
}
