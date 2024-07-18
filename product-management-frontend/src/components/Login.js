import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{
      width: '300px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ccc',
      padding: '20px',
      margin: '40px auto',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px'
    }}>
      <div style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center'
      }}>
        <h2>Login</h2>
      </div>
      <div style={{
        padding: '20px'
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{
            marginBottom: '20px'
          }}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc'
              }}
              placeholder="Enter username"
            />
          </div>
          <div style={{
            marginBottom: '20px'
          }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc'
              }}
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#337ab7',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'admin') {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="form-control"
//             placeholder="Enter username"
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'admin') {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username: </label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label>Password: </label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
