package com.product.ProductManagementSystem.controller;

import com.product.ProductManagementSystem.entity.Product;
import com.product.ProductManagementSystem.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public Product getProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @GetMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }


}
