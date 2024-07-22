package com.product.ProductManagementSystem.service;

import com.product.ProductManagementSystem.entity.Product;
import com.product.ProductManagementSystem.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Product getProduct(Long id) {
        return productRepository.findById(id).orElseThrow();
    }
    public Product updateProduct(Long id, Product product) {
        Product existingProduct = getProduct(id);
        if (existingProduct != null) {
            existingProduct.setName(product.getName());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setStock(product.getStock());
            existingProduct.setDescription(product.getDescription());
            return saveProduct(existingProduct);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
