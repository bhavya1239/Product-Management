import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct, updateProduct } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import AddProduct from './AddProduct';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter(product => product.id !== id));
    });
  };

  const handleUpdate = (product) => {
    navigate('/add-product', { state: product });
  };

  const categories = {};
  products.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });

  return (
    <div>
      <Navbar />
      <h1 className="text-center mb-4">Product List</h1>
      <div className="container mt-5">
        {Object.keys(categories).map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <table className="table table-striped table-bordered table-fixed">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories[category].map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>Rs.{product.price}</td>
                    <td>{product.stock} </td>
                    <td>
                      <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Delete</button>
                      <button onClick={() => handleUpdate(product)} className="btn btn-primary">Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <style>
        {`
          .table-fixed {
            table-layout: fixed;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default ProductList;

















// import React, { useEffect, useState } from 'react';
// import { getAllProducts, deleteProduct, updateProduct } from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getAllProducts().then(response => {
//       setProducts(response.data);
//     });
//   }, []);

//   const handleDelete = (id) => {
//     deleteProduct(id).then(() => {
//       setProducts(products.filter(product => product.id !== id));
//     });
//   };

//   const handleUpdate = (product) => {
//     navigate('/update-product', { state: product });
//   };

//   const categories = {};
//   products.forEach(product => {
//     if (!categories[product.category]) {
//       categories[product.category] = [];
//     }
//     categories[product.category].push(product);
//   });

//   return (
//     <div>
//       <Navbar />
//       <h1 className="text-center mb-4">Product List</h1>
//       <div className="container mt-5">
//         {Object.keys(categories).map(category => (
//           <div key={category}>
//             <h2>{category}</h2>
//             <table className="table table-striped table-bordered table-fixed">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Stock</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categories[category].map(product => (
//                   <tr key={product.id}>
//                     <td>{product.name}</td>
//                     <td>Rs.{product.price}</td>
//                     <td>{product.stock} </td>
//                     <td>
//                       <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Delete</button>
//                       <button onClick={() => handleUpdate(product)} className="btn btn-primary">Update</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </div>
//       <style>
//         {`
//           .table-fixed {
//             table-layout: fixed;
//             width: 100%;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProductList; 














// import React, { useEffect, useState } from 'react';
// import { getAllProducts, deleteProduct } from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getAllProducts().then(response => {
//       setProducts(response.data);
//     });
//   }, []);

//   const handleDelete = (id) => {
//     deleteProduct(id).then(() => {
//       setProducts(products.filter(product => product.id !== id));
//     });
//   };

//   const categories = {};
//   products.forEach(product => {
//     if (!categories[product.category]) {
//       categories[product.category] = [];
//     }
//     categories[product.category].push(product);
//   });

//   return (
//     <div>
//       <Navbar />
//       <h1 className="text-center mb-4">Product List</h1>
//       <div className="container mt-5">
//         {Object.keys(categories).map(category => (
//           <div key={category}>
//             <h2>{category}</h2>
//             <table className="table table-striped table-bordered table-fixed">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Stock</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categories[category].map(product => (
//                   <tr key={product.id}>
//                     <td>{product.name}</td>
//                     <td>Rs.{product.price}</td>
//                     <td>{product.stock} </td>
//                     <td>
//                       <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </div>
//       <style>
//         {`
//           .table-fixed {
//             table-layout: fixed;
//             width: 100%;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ProductList;