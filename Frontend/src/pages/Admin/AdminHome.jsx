// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminHome = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-indigo-600 text-white">
//         <div className="p-6 text-2xl font-bold">
//           CaterHub Admin
//         </div>
//         <nav className="mt-5">
//           <a href="#" className="block px-6 py-3 hover:bg-indigo-500">Dashboard</a>
//           <Link to="/OrderManagement" className="block px-6 py-3 hover:bg-indigo-500">Orders</Link>
//           <Link to="/MenuManagement" className="block px-6 py-3 hover:bg-indigo-500">Menu Management</Link>
//           <Link to="/UserManagement" className="block px-6 py-3 hover:bg-indigo-500">User Management</Link>
//           <Link to="/FeedbackManagement" className="block px-6 py-3 hover:bg-indigo-500">Feedback</Link>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <h1 className="text-3xl font-bold text-gray-700">Admin Dashboard</h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Total Orders</h2>
//             <p className="text-2xl text-indigo-600">320</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Total Revenue</h2>
//             <p className="text-2xl text-indigo-600">₹1,25,000</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">New Users</h2>
//             <p className="text-2xl text-indigo-600">58</p>
//           </div>
//         </div>

//         {/* Order Management Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between">
//               <h3 className="text-lg font-semibold">Recent Orders</h3>
//               <Link to="/OrderManagement" className="text-indigo-600 hover:underline">View All</Link>
//             </div>
//             <ul className="mt-4 space-y-2">
//               <li className="flex justify-between">
//                 <span>Order #ORD001</span>
//                 <span className="text-indigo-600">₹2,500</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Order #ORD002</span>
//                 <span className="text-indigo-600">₹3,200</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Order #ORD003</span>
//                 <span className="text-indigo-600">₹1,800</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Menu Management Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>Manage and update the menus available for events.</p>
//             <Link to="/MenuManagement" className="text-indigo-600 hover:underline mt-4 block">Manage Menus</Link>
//           </div>
//         </div>

//         {/* User Management Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">User Management</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>View and manage registered users of CaterHub.</p>
//             <Link to="/UserManagemnet" className="text-indigo-600 hover:underline mt-4 block">Manage Users</Link>
//           </div>
//         </div>

//         {/* Feedback Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>Read customer feedback to improve services.</p>
//             <Link to="/FeedbackManagement" className="text-indigo-600 hover:underline mt-4 block">View Feedback</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;






import React from 'react';
import { Link } from 'react-router-dom';
import { FaBoxes, FaUsers, FaUtensils, FaCommentsDollar, FaMoneyBill, FaListAlt } from "react-icons/fa";
 // Import icons from react-icons

const AdminHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white">
        <div className="p-6 text-2xl font-bold">
          CaterHub Admin
        </div>
        <nav className="mt-5">
          <Link to="/dashboard" className="block px-6 py-3 hover:bg-indigo-600 flex items-center">
            <FaListAlt className="mr-2" /> Dashboard
          </Link>
          <Link to="/OrderManagement" className="block px-6 py-3 hover:bg-indigo-600 flex items-center">
            <FaBoxes className="mr-2" /> Orders
          </Link>
          <Link to="/MenuManagement" className="block px-6 py-3 hover:bg-indigo-600 flex items-center">
            <FaUtensils className="mr-2" /> Menu Management
          </Link>
          <Link to="/UserManagement" className="block px-6 py-3 hover:bg-indigo-600 flex items-center">
            <FaUsers className="mr-2" /> User Management
          </Link>
          <Link to="/FeedbackManagement" className="block px-6 py-3 hover:bg-indigo-600 flex items-center">
            <FaCommentsDollar className="mr-2" /> Feedback
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-700">Admin Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold flex items-center">
              <FaBoxes className="mr-2 text-indigo-600" /> Total Orders
            </h2>
            <p className="text-3xl text-indigo-700 font-bold mt-4">320</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold flex items-center">
              <FaMoneyBill className="mr-2 text-green-600" /> Total Revenue
            </h2>
            <p className="text-3xl text-green-700 font-bold mt-4">₹1,25,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold flex items-center">
              <FaUsers className="mr-2 text-blue-600" /> New Users
            </h2>
            <p className="text-3xl text-blue-700 font-bold mt-4">58</p>
          </div>
        </div>

        {/* Order Management Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <Link to="/OrderManagement" className="text-indigo-600 hover:underline">View All</Link>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between items-center">
                <span>Order #ORD001</span>
                <span className="text-indigo-600 font-semibold">₹2,500</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Order #ORD002</span>
                <span className="text-indigo-600 font-semibold">₹3,200</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Order #ORD003</span>
                <span className="text-indigo-600 font-semibold">₹1,800</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Management Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <p>Manage and update the menus available for events.</p>
            <Link to="/MenuManagement" className="text-indigo-600 hover:underline mt-4 block">Manage Menus</Link>
          </div>
        </div>

        {/* User Management Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <p>View and manage registered users of CaterHub.</p>
            <Link to="/UserManagement" className="text-indigo-600 hover:underline mt-4 block">Manage Users</Link>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <p>Read customer feedback to improve services.</p>
            <Link to="/FeedbackManagement" className="text-indigo-600 hover:underline mt-4 block">View Feedback</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
