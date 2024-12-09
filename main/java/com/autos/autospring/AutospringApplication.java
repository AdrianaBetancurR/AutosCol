package com.autos.autospring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AutospringApplication {
    public static void main(String[] args) {
        SpringApplication.run(AutospringApplication.class, args);
        System.out.println("Aplicación cargada correctamente.");
    }
}

