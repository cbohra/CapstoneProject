package com.chirag.e_comBackend.repository;

import com.chirag.e_comBackend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
