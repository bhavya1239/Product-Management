import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: '#f9f9f9'
      }}>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#333',
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          Welcome to Product Management System
        </h1>
        <style>
          {`
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;








// import React from 'react';
// import Navbar from './Navbar';

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '80vh',
//         backgroundColor: '#f9f9f9'
//       }}>
//         <h1 style={{
//           fontSize: '36px',
//           fontWeight: 'bold',
//           color: '#333'
//         }}>
//           Welcome to Product Management System
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Home;