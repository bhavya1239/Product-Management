import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  auth: {
    username: 'admin',
    password: 'admin'
  }
});

export const getAllProducts = () => api.get('/products');
export const addProduct = (product) => api.post('/products', product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const updateProduct = (id, product) => api.put(`/products/${id}`, product);
