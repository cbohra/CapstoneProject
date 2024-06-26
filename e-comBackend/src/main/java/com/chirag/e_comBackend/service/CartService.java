package com.chirag.e_comBackend.service;

import com.chirag.e_comBackend.model.Cart;
import com.chirag.e_comBackend.model.CartItem;
import com.chirag.e_comBackend.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart addItemToCart(Long cartID, CartItem cartItem) {
        Cart cart = cartRepository.findById(cartID).orElse(new Cart());
        cart.getItems().add(cartItem);
        return cartRepository.save(cart);
    }
    public List<CartItem> getAllCartItems(long Id){
        Cart c= cartRepository.findById(Id).orElse(null);
        return c.getItems();
    }

    public Cart updateCartItem(CartItem cartItem) {
        Cart cart = cartRepository.findById(cartItem.getCart().getId()).orElse(new Cart());
        CartItem c= null;
        for (CartItem ci : cart.getItems()){
            if(ci.getId().equals(cartItem.getId())){
                c=ci;break;
            }
        }
        c.setCart(cartItem.getCart());
        c.setProduct(cartItem.getProduct());
        c.setQuantity(cartItem.getQuantity());

        return cartRepository.save(cart);
    }

    public Cart removeItemFromCart(Long itemId) {
        Cart cart = cartRepository.findById(itemId).orElse(new Cart());
        cart.getItems().remove(itemId);
        return cartRepository.save(cart);
    }

    public Optional<Cart> getCartById(Long cartId) {
        return cartRepository.findById(cartId);
    }
}
