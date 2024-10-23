// import React from 'react';
// import { Link } from 'react-router-dom';

// const LoginPage = () => {
//   return (
//     // <div className="min-h-screen flex items-center justify-center bg-gray-100  bg-[url('img4.jpg')]">
//     //   <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-[url('img4.jpg')]">
//   <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         {/* Logo */}
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//           CATERHUB
//         </h2>

//         {/* Login Form */}
//         <form>
//           {/* Email */}
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Remember Me Checkbox */}
//           <div className="mb-6 flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//               />
//               <label
//                 htmlFor="remember"
//                 className="ml-2 text-gray-700 font-medium"
//               >
//                 Remember Me
//               </label>
//             </div>
//             <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="mt-6 flex items-center justify-center">
//           <span className="text-gray-400">Don't have an account?</span>
//           <Link to="/registration" className="text-indigo-600 hover:text-indigo-700 ml-2">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.status === 200) {
        alert('Login successful');
        // Save token in localStorage or redirect to dashboard
        localStorage.setItem('token', result.token);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-[url('img4.jpg')]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          CATERHUB
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-400">Don't have an account?</span>
          <Link to="/registration" className="text-indigo-600 hover:text-indigo-700 ml-2">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
