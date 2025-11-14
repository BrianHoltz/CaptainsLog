package com.example.captainslog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class DinosaurController {

    @GetMapping("/dinosaur")
    public String dinosaur() {
        return "dinosaur"; // resolves to src/main/resources/templates/dinosaur.html
    }

    // Some clients may request /api/dinosaur — redirect them to the page
    @GetMapping("/api/dinosaur")
    public String dinosaurApiRedirect() {
        return "redirect:/dinosaur";
    }
}
