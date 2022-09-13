package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.ListItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListItemRepository extends JpaRepository<ListItem, Integer> {
}
