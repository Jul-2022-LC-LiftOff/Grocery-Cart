package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.StepRepository;
import com.shopassist.shopassitapi.models.Ingredient;
import com.shopassist.shopassitapi.models.Step;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class StepController {

    @Autowired
    private StepRepository stepRepository;

    @GetMapping("steps")
    public List<Step> getSteps() {
        return stepRepository.findAll();
    }

    @PostMapping("steps/addnew")
    public void addStep(@RequestBody Step step) {
        stepRepository.save(step);
    }

    @PutMapping("steps/{id}/edit")
    public void editStep(@PathVariable("id") Integer id, @RequestBody Step step) {
        stepRepository.save(step);
    }

    @DeleteMapping("steps/{id}/delete")
    public void deleteStep(@PathVariable("id") Integer id) {
        stepRepository.deleteById(id);
    }

}
