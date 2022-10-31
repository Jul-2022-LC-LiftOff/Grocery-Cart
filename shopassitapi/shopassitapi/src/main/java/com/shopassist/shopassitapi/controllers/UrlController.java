package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.IngredientRepository;
import com.shopassist.shopassitapi.data.RecipeRepository;
import com.shopassist.shopassitapi.data.StepRepository;
import com.shopassist.shopassitapi.data.UrlRepository;
import com.shopassist.shopassitapi.models.Ingredient;
import com.shopassist.shopassitapi.models.Recipe;
import com.shopassist.shopassitapi.models.Step;
import com.shopassist.shopassitapi.models.URL;
import com.shopassist.shopassitapi.models.dto.RecipeIngredientDTO;
import com.shopassist.shopassitapi.models.dto.RecipeStepDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("urlInsert")
public class  UrlController {

    @Autowired
    private UrlRepository urlRepository;




}