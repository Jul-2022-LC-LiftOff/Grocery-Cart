package com.shopassist.shopassitapi.controllers;

import com.shopassist.shopassitapi.data.SummaryRepository;
import com.shopassist.shopassitapi.models.Summary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class SummaryController {
    @Autowired
    private SummaryRepository summaryRepository;

    @GetMapping("summary")
    public List<Summary> getSummary() {return summaryRepository.findAll();}
}
