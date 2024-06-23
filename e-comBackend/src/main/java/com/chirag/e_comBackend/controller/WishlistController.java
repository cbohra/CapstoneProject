package com.chirag.e_comBackend.controller;

import com.chirag.e_comBackend.model.Wishlist;
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
    public Wishlist addItemToWishlist(@RequestBody Wishlist wishlist) {
        return wishlistService.addItemToWishlist(wishlist);
    }

    @DeleteMapping("/remove/{itemId}")
    public void removeItemFromWishlist(@PathVariable Long itemId) {
         wishlistService.removeItemFromWishlist(itemId);
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
