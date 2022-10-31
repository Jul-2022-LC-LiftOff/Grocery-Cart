package com.shopassist.shopassitapi.data;

import com.shopassist.shopassitapi.models.Summary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface SummaryRepository extends JpaRepository<Summary, Integer> {
}
