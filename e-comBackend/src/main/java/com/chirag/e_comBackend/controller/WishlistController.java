package com.chirag.e_comBackend.controller;

import com.chirag.e_comBackend.model.Wishlist;
import com.chirag.e_comBackend.model.WishlistItem;
import com.chirag.e_comBackend.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @PostMapping("/add")
    public Wishlist addItemToWishlist(@RequestBody WishlistItem wishlistItem) {
        return wishlistService.addItemToWishlist(wishlistItem);
    }

    @DeleteMapping("/remove/{itemId}")
    public Wishlist removeItemFromWishlist(@PathVariable Long itemId) {
        return wishlistService.removeItemFromWishlist(itemId);
    }

    @GetMapping("/{wishlistId}")
    public Optional<Wishlist> getWishlistById(@PathVariable Long wishlistId) {
        return wishlistService.getWishlistById(wishlistId);
    }

    @GetMapping("/user/{userId}")
    public List<Wishlist> getWishlistsByUserId(@PathVariable Long userId) {
        return wishlistService.getWishlistsByUserId(userId);
    }
}
