import React, { useState } from 'react';
import { addProduct, updateProduct } from '../api/api';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;

  const [name, setName] = useState(product ? product.name : '');
  const [category, setCategory] = useState(product ? product.category : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [stock, setStock] = useState(product ? product.stock : '');
  const [description, setDescription] = useState(product ? product.description : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (product) {
      updateProduct(product.id, { name, category, price, stock, description }).then(() => {
        navigate('/products');
      });
    } else {
      addProduct({ name, category, price, stock, description }).then(() => {
        navigate('/products');
      });
    }
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'category':
        setCategory(event.target.value);
        break;
      case 'price':
        setPrice(event.target.value);
        break;
      case 'stock':
        setStock(event.target.value);
        break;
      case 'description':
        setDescription(event.target.value);
        break;
      default:
        break;
    }
  };

    return (
      <div><Navbar></Navbar>
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        padding: '20px'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>{product ? 'Update Product' : 'Add Product'}</h1>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px'
        }}>
          <div style={{
            marginBottom: '20px'
          }}>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange} style={{
              width: '100%',
              height: '40px',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc'
            }} />
          </div>
          <div style={{
            marginBottom: '20px'
          }}>
            <label>Category:</label>
            <input type="text" name="category" value={category} onChange={handleChange} style={{
              width: '100%',
              height: '40px',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc'
            }} />
          </div>
          <div style={{
            marginBottom: '20px'
          }}>
            <label>Price:</label>
            <input type="text" name="price" value={price} onChange={handleChange} style={{
              width: '100%',
              height: '40px',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc'
            }} />
          </div>
          <div style={{
            marginBottom: '20px'
          }}>
            <label>Stock:</label>
            <input type="text" name="stock" value={stock} onChange={handleChange} style={{
              width: '100%',
              height: '40px',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc'
            }} />
          </div>
          <div style={{
            marginBottom: '20px'
          }}>
            <label>Description:</label>
            <textarea name="description" value={description} onChange={handleChange} style={{
              width: '100%',
              height: '100px',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc'
            }} />
          </div>
          <button type="submit" style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>{product ? 'Update' : 'Add'}</button>
        </form>
      </div>
            </div>
            </div>
  );
};

export default AddProduct;