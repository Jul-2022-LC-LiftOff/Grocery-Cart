package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.IngredientEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientEntryRepository extends JpaRepository<IngredientEntry, Integer> {
}
