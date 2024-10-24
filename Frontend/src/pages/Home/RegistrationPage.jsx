// import React, { useState } from 'react';

// const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phoneNumber: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Validation logic
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }
  
//     // Make API request to the backend
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const result = await response.json();
//       if (response.status === 201) {
//         alert('User registered successfully');
//         setFormData({
//           name: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           phoneNumber: '',
//         });
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to register');
//     }
//   };

//   const handleCancel = () => {
//     // Clear the form or navigate to another page
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       phoneNumber: '',
//     });
//     console.log('Form Cancelled');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//           Create an Account
//         </h2>

//         {/* Registration Form */}
//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-6">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

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
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div className="mb-6">
//             <label
//               htmlFor="phoneNumber"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               placeholder="Enter your phone number"
//               required
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
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-6">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//             >
//               Register
//             </button>
//             <button
//               type="button"
//               className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;


// import React, { useState } from 'react';

// const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phoneNumber: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation logic
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }

//     // Make API request to the backend
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.status === 201) {
//         alert('User registered successfully');
//         setFormData({
//           name: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           phoneNumber: '',
//         });
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to register');
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       phoneNumber: '',
//     });
//     console.log('Form Cancelled');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white shadow-2xl rounded-lg p-10 max-w-lg w-full space-y-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-tight">
//           Create Your Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 text-lg"
//               placeholder="Your full name"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 text-lg"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label
//               htmlFor="phoneNumber"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 text-lg"
//               placeholder="Your phone number"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 text-lg"
//               placeholder="Create a password"
//               required
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 text-lg"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex items-center justify-between mt-8 space-x-4">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
//             >
//               Register
//             </button>
//           </div>

//           <div className="flex justify-center mt-4">
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="text-sm text-gray-500 hover:text-gray-700"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;



import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Make API request to the backend
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.status === 201) {
        alert('User registered successfully');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to register');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    });
    console.log('Form Cancelled');
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhdGVyaW5nfGVufDB8fHx8MTY4Mjg1MzIzOQ&ixlib=rb-1.2.1&q=80&w=1080')`
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              placeholder="Your phone number"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Register
            </button>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
