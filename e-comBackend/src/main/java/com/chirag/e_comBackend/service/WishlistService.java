package com.chirag.e_comBackend.service;

import com.chirag.e_comBackend.model.Wishlist;
import com.chirag.e_comBackend.model.WishlistItem;
import com.chirag.e_comBackend.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    public Wishlist addItemToWishlist(WishlistItem wishlistItem) {
        Wishlist wishlist = wishlistRepository.findById(wishlistItem.getWishlistId()).orElse(new Wishlist());
        wishlist.addItem(wishlistItem);
        return wishlistRepository.save(wishlist);
    }

    public Wishlist removeItemFromWishlist(Long itemId) {
        Wishlist wishlist = wishlistRepository.findById(itemId).orElse(new Wishlist());
        wishlist.removeItem(itemId);
        return wishlistRepository.save(wishlist);
    }

    public Optional<Wishlist> getWishlistById(Long wishlistId) {
        return wishlistRepository.findById(wishlistId);
    }

    public List<Wishlist> getWishlistsByUserId(Long userId) {
        return wishlistRepository.findByUserId(userId);
    }
}
