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
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Welcome to Product Management System
        </h1>
      </div>
    </div>
  );
};

export default Home;




// import React from 'react';
// import Navbar from './Navbar';

// const Home = () => {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '20px',
//       backgroundColor: '#f9f9f9'
//     }}>
//       <Navbar />
//       <h1 style={{
//         fontSize: '36px',
//         fontWeight: 'bold',
//         color: '#333',
//         margin: '20px 0'
//       }}>
//         Welcome to Product Management System
//       </h1>
//     </div>
//   );
// };

// export default Home;






// import React from 'react';
// import Navbar from './Navbar';

// const Home = () => {
//   return (
//       <div>
//           <Navbar></Navbar>
//       <h1>Welcome TO Product Management System</h1>
//     </div>
//   );
// };
// export default Home;