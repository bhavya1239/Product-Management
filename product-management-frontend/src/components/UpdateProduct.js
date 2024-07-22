import React, { useState, useEffect } from 'react';
import { updateProduct } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // fetch product data from API
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://your-api-url.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProduct(id, product);
      navigate('/products', { replace: true }); // Redirect to product list page
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="update-product-form">
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
























// import React, { useState, useEffect } from 'react';
// import { updateProduct } from '../api/api';
// import { useNavigate, useParams } from 'react-router-dom';
// import Navbar from './Navbar';

// const UpdateProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     // fetch product data from API
//     // For now, let's assume you have a function to fetch product data
//     const fetchProductData = async () => {
//       try {
//         const response = await fetch(`https://your-api-url.com/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchProductData();
//   }, [id]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await updateProduct(id, product);
//       navigate('/products', { replace: true }); // Redirect to product list
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (event) => {
//     setProduct({ ...product, [event.target.name]: event.target.value });
//   };

//   return (
//     <div className="container">
//       <Navbar />
//       <div className="update-product-form">
//         <h1>Update Product</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={product.name}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Price:</label>
//             <input
//               type="number"
//               name="price"
//               value={product.price}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Stock:</label>
//             <input
//               type="number"
//               name="stock"
//               value={product.stock}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProduct;


















// import React, { useState, useEffect } from 'react';
// import { updateProduct } from '../api/api';
// import { useNavigate, useParams } from 'react-router-dom';
// import Navbar from './Navbar';

// const UpdateProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     // fetch product data from API
//     // ...
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await updateProduct(id, product);
//       navigate('/products');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (event) => {
//     setProduct({ ...product, [event.target.name]: event.target.value });
//   };

//   return (
//     <div className="container">
//       <Navbar />
//       <div className="update-product-form">
//         <h1>Update Product</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={product.name}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Price:</label>
//             <input
//               type="number"
//               name="price"
//               value={product.price}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Stock:</label>
//             <input
//               type="number"
//               name="stock"
//               value={product.stock}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProduct;












// import React, { useState } from 'react';
// import { updateProduct } from '../api/api';
// import { useNavigate, useParams } from 'react-router-dom';
// import Navbar from './Navbar';

// const UpdateProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     // fetch product data from API
//     // ...
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateProduct(id, product).then(() => {
//       navigate('/products');
//     });
//   };

//   const handleChange = (event) => {
//     setProduct({ ...product, [event.target.name]: event.target.value });
//   };

//     return (
//     <div>
//         <Navbar></Navbar>
//     <div>
//       <h1>Update Product</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" name="name" value={product.name} onChange={handleChange} />
//         <br />
//         <label>Price:</label>
//         <input type="number" name="price" value={product.price} onChange={handleChange} />
//         <br />
//         <label>Stock:</label>
//         <input type="number" name="stock" value={product.stock} onChange={handleChange} />
//         <br />
//         <button type="submit">Update</button>
//       </form>
//         </div>
//         </div>
//   );
// };

// export default UpdateProduct;