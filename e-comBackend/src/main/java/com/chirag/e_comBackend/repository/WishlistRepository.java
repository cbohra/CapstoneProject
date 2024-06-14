package com.chirag.e_comBackend.repository;

import com.chirag.e_comBackend.model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {
    List<Wishlist> findByUserId(Long userId);
}
