package com.chirag.e_comBackend.service;

import com.chirag.e_comBackend.model.Wishlist;
import com.chirag.e_comBackend.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    public Wishlist addItemToWishlist(Wishlist _wishlist) {

        return wishlistRepository.save(_wishlist);
    }

    public void removeItemFromWishlist(Long itemId) {

         wishlistRepository.deleteById(itemId);
    }

    public Optional<Wishlist> getWishlistById(Long wishlistId) {
        return wishlistRepository.findById(wishlistId);
    }

    public List<Wishlist> getWishlistsByUserId(Long userId) {
        return wishlistRepository.findByUserId(userId);
    }
}
