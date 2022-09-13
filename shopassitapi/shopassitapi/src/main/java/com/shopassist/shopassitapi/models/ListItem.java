package com.shopassist.shopassitapi.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ListItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String listItem;

    public ListItem() {
    }

    public ListItem(Integer id, String listItem) {
        this.id = id;
        this.listItem = listItem;
    }

    public Integer getId() {
        return id;
    }

    public String getListItem() {
        return listItem;
    }

    public void setListItem(String listItem) {
        this.listItem = listItem;
    }

    //need toString and equals/hashCode
}
