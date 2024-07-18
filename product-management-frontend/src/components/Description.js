import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { getAllProducts } from '../api/api';

const Description = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

    return (
    <div>
        <Navbar></Navbar>
    <div className="container" style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="product-descriptions" style={{
        padding: '20px'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>Product Descriptions</h1>
        <table className="table" style={{
          marginBottom: '20px'
        }}>
          <thead>
            <tr>
              <th style={{
                padding: '10px',
                borderBottom: '1px solid #ddd',
                backgroundColor: '#f0f0f0'
              }}>Name</th>
              <th style={{
                padding: '10px',
                borderBottom: '1px solid #ddd',
                backgroundColor: '#f0f0f0'
              }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td style={{
                  padding: '10px',
                  borderBottom: '1px solid #ddd'
                }}>{product.name}</td>
                <td style={{
                  padding: '10px',
                  borderBottom: '1px solid #ddd'
                }}>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>        
  );
};

export default Description;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar';
// import { getAllProducts } from '../api/api';

// const Description = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts().then(response => {
//       setProducts(response.data);
//     });
//   }, []);

//     return (
//         <div>
//             <Navbar></Navbar>
//     <div>
//       <h1>Product Descriptions</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//             </div>
//             </div>
//   );
// };

// export default Description;