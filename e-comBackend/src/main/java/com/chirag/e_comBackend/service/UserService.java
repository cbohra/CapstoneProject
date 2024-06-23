package com.chirag.e_comBackend.service;

import com.chirag.e_comBackend.model.User;
import com.chirag.e_comBackend.repository.UserRepository;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Optional;


@Service
public class UserService {


    @Autowired
    private UserRepository userRepository;
    private static final Logger logger= LoggerFactory.getLogger(UserService.class);

    //@Autowired
    //private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        //user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> authenticate(String username, String password) {
        Optional<User> userOpt = userRepository.findByUsername(username);
        //logger implement
        logger.info("Attempting to authenticate user: {}", userOpt);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if ((password.equals( user.getPassword()))) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }

   // @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        return userRepository.findByUsername(username).orElse(null);
//    }
}
