package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.URL;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UrlRepository extends JpaRepository< URL, Integer> {
}
