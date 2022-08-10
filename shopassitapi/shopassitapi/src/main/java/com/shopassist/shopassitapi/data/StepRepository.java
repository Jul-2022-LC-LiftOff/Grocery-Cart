package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.Step;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StepRepository extends CrudRepository<Step, Integer> {
}
