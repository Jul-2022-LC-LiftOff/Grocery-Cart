package com.shopassist.shopassitapi.models;

import javax.persistence.*;

@Entity
public class URL {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;

    private String name;






}
