package com.chirag.e_comBackend.service;

import com.chirag.e_comBackend.model.Cart;
import com.chirag.e_comBackend.model.CartItem;
import com.chirag.e_comBackend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart addItemToCart(CartItem cartItem) {
        Cart cart = cartRepository.findById(cartItem.getCartId()).orElse(new Cart());
        cart.addItem(cartItem);
        return cartRepository.save(cart);
    }

    public Cart updateCartItem(CartItem cartItem) {
        Cart cart = cartRepository.findById(cartItem.getCartId()).orElse(new Cart());
        cart.updateItem(cartItem);
        return cartRepository.save(cart);
    }

    public Cart removeItemFromCart(Long itemId) {
        Cart cart = cartRepository.findById(itemId).orElse(new Cart());
        cart.removeItem(itemId);
        return cartRepository.save(cart);
    }

    public Optional<Cart> getCartById(Long cartId) {
        return cartRepository.findById(cartId);
    }
}
