package com.chirag.e_comBackend.repository;

import com.chirag.e_comBackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
