package com.example.pets;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

/**
 * User: david
 * Date: 04.12.2016
 * Time: 14:50
 */
@SpringBootApplication
public class PetsApp implements CommandLineRunner {

    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(PetsApp.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
