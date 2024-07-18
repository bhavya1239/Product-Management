package com.product.ProductManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.product.ProductManagementSystem.entity.Description;

public interface DescriptionRepository extends JpaRepository<Description, Long> {

}