package com.autos.autospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class inicio {

    @GetMapping("/inicio")  // Ruta raíz
    public String home() {
        return "inicio";  // Nombre de la vista (index.html)


        
    }
}
