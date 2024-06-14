package com.chirag.e_comBackend.controller;

import com.chirag.e_comBackend.model.Cart;
import com.chirag.e_comBackend.model.CartItem;
import com.chirag.e_comBackend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping
    public Cart createCart(@RequestBody Cart cart) {
        return cartService.createCart(cart);
    }

    @GetMapping("/{id}")
    public Cart getCart(@PathVariable Long id) {
        return cartService.getCartById(id);
    }

    @PostMapping("/{cartId}/items")
    public CartItem addCartItem(@PathVariable Long cartId, @RequestBody CartItem cartItem) {
        return cartService.addCartItem(cartId, cartItem);
    }

    @DeleteMapping("/{cartId}/items/{itemId}")
    public void removeCartItem(@PathVariable Long cartId, @PathVariable Long itemId) {
        cartService.removeCartItem(cartId, itemId);
    }

    @GetMapping("/{cartId}/items")
    public List<CartItem> getCartItems(@PathVariable Long cartId) {
        return cartService.getCartItems(cartId);
    }

    // Add more endpoints as necessary
}
