package com.product.ProductManagementSystem.service;

import com.product.ProductManagementSystem.entity.Description;
import com.product.ProductManagementSystem.repository.DescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
    public class DescriptionService {

        @Autowired
        private DescriptionRepository descriptionRepository;

        public List<Description> getAllDescriptions() {
            return descriptionRepository.findAll();
        }

        public Description getDescription(Long id) {
            return descriptionRepository.findById(id).orElseThrow();
        }

        public Description createDescription(Description description) {
            return descriptionRepository.save(description);
        }

        public Description updateDescription(Long id, Description description) {
            Description existingDescription = getDescription(id);
            existingDescription.setDescription(description.getDescription());
            return descriptionRepository.save(existingDescription);
        }

        public void deleteDescription(Long id) {
            descriptionRepository.deleteById(id);
        }
    }

