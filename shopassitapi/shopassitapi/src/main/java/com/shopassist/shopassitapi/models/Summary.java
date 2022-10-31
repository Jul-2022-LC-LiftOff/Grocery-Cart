package com.shopassist.shopassitapi.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Summary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String summary;

}

//    @ManyToMany(mappedBy = "summary")
//    private final List<Recipe> recipes = new ArrayList<>();
//
//    public Summary() {
//    }
//
//    public Summary(Integer id, String summary) {
//        this.id = id;
//        this.summary = summary;
//    }
//
//    public Integer getId() {
//        return id;
//    }
//
//    public String getSummary() {
//        return summary;
//    }
//
//    public void setSummary(String summary) {
//        this.summary = summary;
//    }
//}


