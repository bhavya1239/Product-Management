import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../api/api';
import Navbar from './Navbar';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(response => {
      setProducts(response.data);
      const categories = [...new Set(response.data.map(product => product.category))];
      setCategories(categories);
    });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const categoryProducts = products.filter(product => product.category === category);
    setCategoryProducts(categoryProducts);
  };

  return (
    <div>
      <Navbar></Navbar>
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
          }}>Categories</h1>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            {categories.map(category => (
              <li key={category} style={{
                marginBottom: '10px'
              }}>
                <a href="#" style={{
                  textDecoration: 'none',
                  color: '#337ab7',
                  transition: 'color 0.2s ease'
                }} onClick={() => handleCategoryClick(category)}>
                  {category}
                </a>
              </li>
            ))}
          </ul>
          {selectedCategory && (
            <div style={{
              padding: '20px'
            }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}>Products in {selectedCategory}</h2>
              <table style={{
                borderCollapse: 'collapse',
                width: '100%'
              }}>
                <thead>
                  <tr>
                    <th style={{
                      backgroundColor: '#f0f0f0',
                      padding: '10px',
                      border: '1px solid #ddd'
                    }}>Name</th>
                    <th style={{
                      backgroundColor: '#f0f0f0',
                      padding: '10px',
                      border: '1px solid #ddd'
                    }}>Price</th>
                    <th style={{
                      backgroundColor: '#f0f0f0',
                      padding: '10px',
                      border: '1px solid #ddd'
                    }}>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryProducts.map(product => (
                    <tr key={product.id}>
                      <td style={{
                        padding: '10px',
                        border: '1px solid #ddd'
                      }}>{product.name}</td>
                      <td style={{
                        padding: '10px',
                        border: '1px solid #ddd'
                      }}>{product.price}</td>
                      <td style={{
                        padding: '10px',
                        border: '1px solid #ddd'
                      }}>{product.stock} units</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;









// import React, { useState, useEffect } from 'react';
// import { getAllProducts } from '../api/api';
// import Navbar from './Navbar';

// const Category = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [categoryProducts, setCategoryProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts().then(response => {
//       setProducts(response.data);
//       const categories = [...new Set(response.data.map(product => product.category))];
//       setCategories(categories);
//     });
//   }, []);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     const categoryProducts = products.filter(product => product.category === category);
//     setCategoryProducts(categoryProducts);
//   };

//     return (
//       <div>
//          <Navbar></Navbar>
//     <div style={{
//       maxWidth: '800px',
//       margin: '40px auto',
//       padding: '20px',
//       backgroundColor: '#f9f9f9',
//       border: '1px solid #ddd',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
//     }}>
//       <div style={{
//         padding: '20px'
//       }}>
//         <h1 style={{
//           fontSize: '24px',
//           fontWeight: 'bold',
//           marginBottom: '20px'
//         }}>Categories</h1>
//         <ul style={{
//           listStyle: 'none',
//           padding: '0',
//           margin: '0'
//         }}>
//           {categories.map(category => (
//             <li key={category} style={{
//               marginBottom: '10px'
//             }}>
//               <a href="#" style={{
//                 textDecoration: 'none',
//                 color: '#337ab7',
//                 transition: 'color 0.2s ease'
//               }} onClick={() => handleCategoryClick(category)}>
//                 {category}
//               </a>
//             </li>
//           ))}
//         </ul>
//         {selectedCategory && (
//           <div style={{
//             padding: '20px'
//           }}>
//             <h2 style={{
//               fontSize: '18px',
//               fontWeight: 'bold',
//               marginBottom: '10px'
//             }}>Products in {selectedCategory}</h2>
//             <ul style={{
//               listStyle: 'none',
//               padding: '0',
//               margin: '0'
//             }}>
//               {categoryProducts.map(product => (
//                 <li key={product.id} style={{
//                   marginBottom: '10px'
//                 }}>
//                   <span style={{
//                     fontSize: '16px',
//                     fontWeight: 'normal',
//                     marginRight: '10px'
//                   }}>{product.name}</span>
//                   <span style={{
//                     fontSize: '16px',
//                     fontWeight: 'normal',
//                     marginRight: '10px'
//                   }}>{product.price}</span>
//                   <span style={{
//                     fontSize: '16px',
//                     fontWeight: 'normal'
//                   }}>{product.stock} units</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//             </div>
//             </div>
//   );
// };

// export default Category;









// import React, { useState, useEffect } from 'react';
// import { getAllProducts } from '../api/api';
// import Navbar from './Navbar';

// const Category = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     getAllProducts().then(response => {
//       setProducts(response.data);
//       const categories = [...new Set(response.data.map(product => product.category))];
//       setCategories(categories);
//     });
//   }, []);

//     return (
//         <div>
//         <Navbar></Navbar>
//     <div style={{
//       maxWidth: '800px',
//       margin: '40px auto',
//       padding: '20px',
//       backgroundColor: '#f9f9f9',
//       border: '1px solid #ddd',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
//     }}>
      
//       <div style={{
//         padding: '20px'
//       }}>
//         <h1 style={{
//           fontSize: '24px',
//           fontWeight: 'bold',
//           marginBottom: '20px'
//         }}>Categories</h1>
//         <ul style={{
//           listStyle: 'none',
//           padding: '0',
//           margin: '0'
//         }}>
//           {categories.map(category => (
//             <li key={category} style={{
//               marginBottom: '10px'
//             }}>
//               <a href="#" style={{
//                 textDecoration: 'none',
//                 color: '#337ab7',
//                 transition: 'color 0.2s ease'
//               }}>
//                 {category}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//             </div>
//             </div>
//   );
// };

// export default Category;








// import React, { useState, useEffect } from 'react';
// import { getAllProducts } from '../api/api';
// import Navbar from './Navbar';

// const Category = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     getAllProducts().then(response => {
//       setProducts(response.data);
//       const categories = [...new Set(response.data.map(product => product.category))];
//       setCategories(categories);
//     });
//   }, []);

//   return (
//       <div>
//           <Navbar></Navbar>
//           <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map(category => (
//           <li key={category}>
//             <a href="#">{category}</a>
//           </li>
//         ))}
//       </ul>
//           </div>
//           </div>
//   );
// };

// export default Category;








// import React from 'react';
// import Navbar from './Navbar';

// const Category = () => {
//   return (
//       <div>
//           <Navbar></Navbar>
//       <h1>Category</h1>
//       {/* Add category content here */}
//     </div>
//   );
// };

// export default Category;