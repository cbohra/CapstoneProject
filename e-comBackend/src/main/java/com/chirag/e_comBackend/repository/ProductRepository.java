package com.chirag.e_comBackend.repository;

import com.chirag.e_comBackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
