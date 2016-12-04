package com.example.pets;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.*;

/**
 * User: david
 * Date: 04.12.2016
 * Time: 15:15
 */
public interface PetRepo extends JpaRepository<Pet, Long> {
}
