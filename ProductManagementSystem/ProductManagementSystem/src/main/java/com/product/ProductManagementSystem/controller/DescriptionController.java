package com.product.ProductManagementSystem.controller;

import com.product.ProductManagementSystem.entity.Description;
import com.product.ProductManagementSystem.service.DescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/descriptions")
public class DescriptionController {
    @Autowired
    private DescriptionService descriptionService;

    @GetMapping
    public List<Description> getAllDescriptions() {
        return descriptionService.getAllDescriptions();
    }

    @GetMapping("/{id}")
    public Description getDescription(@PathVariable Long id) {
        return descriptionService.getDescription(id);
    }

    @PostMapping
    public Description createDescription(@RequestBody Description description) {
        return descriptionService.createDescription(description);
    }

    @PutMapping("/{id}")
    public Description updateDescription(@PathVariable Long id, @RequestBody Description description) {return descriptionService.updateDescription(id, description);
    }

    @DeleteMapping("/{id}")
    public void deleteDescription(@PathVariable Long id) {
        descriptionService.deleteDescription(id);
    }
}

