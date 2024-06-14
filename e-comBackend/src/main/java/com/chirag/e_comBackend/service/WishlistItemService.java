package com.chirag.e_comBackend.service;

import com.chirag.e_comBackend.model.WishlistItem;
import com.chirag.e_comBackend.repository.WishlistItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishlistItemService {

    @Autowired
    private WishlistItemRepository wishlistItemRepository;

    public WishlistItem addWishlistItem(WishlistItem wishlistItem) {
        return wishlistItemRepository.save(wishlistItem);
    }

    public Optional<WishlistItem> findWishlistItemById(Long id) {
        return wishlistItemRepository.findById(id);
    }

    public List<WishlistItem> findAllWishlistItems() {
        return wishlistItemRepository.findAll();
    }

    public void deleteWishlistItem(Long id) {
        wishlistItemRepository.deleteById(id);
    }

    public WishlistItem updateWishlistItem(WishlistItem wishlistItem) {
        return wishlistItemRepository.save(wishlistItem);
    }
}
