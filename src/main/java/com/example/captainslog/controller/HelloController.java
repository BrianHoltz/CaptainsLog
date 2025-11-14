package com.example.captainslog.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping
public class HelloController {

    // JSON API kept under /api
    @GetMapping(value = "/api/hello", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Map<String, String> hello() {
        return Map.of("message", "Hello from CaptainsLog!");
    }

    // Render Thymeleaf template at /heather
    @GetMapping("/heather")
    public String heather() {
        return "heather"; // resolves to src/main/resources/templates/heather.html
    }

}
