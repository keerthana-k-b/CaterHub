// import React from 'react';

// const CatererHome = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-green-600 text-white">
//         <div className="p-6 text-2xl font-bold">
//           CaterHub Caterer
//         </div>
//         <nav className="mt-5">
//           <Link to="#" className="block px-6 py-3 hover:bg-green-500">Dashboard</Link>
//           <Link to="/OrderManagementForCaterer" className="block px-6 py-3 hover:bg-green-500">Orders</Link>
//           <Link to="/MenuManagement" className="block px-6 py-3 hover:bg-green-500">Menu Management</Link>
//           <Link to="/DeliveryManagement" className="block px-6 py-3 hover:bg-green-500">Delivery Status</Link>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <h1 className="text-3xl font-bold text-gray-700">Caterer Dashboard</h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Upcoming Orders</h2>
//             <p className="text-2xl text-green-600">8</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Menus Available</h2>
//             <p className="text-2xl text-green-600">5</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Deliveries in Progress</h2>
//             <p className="text-2xl text-green-600">3</p>
//           </div>
//         </div>

//         {/* Order Management Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between">
//               <h3 className="text-lg font-semibold">Recent Orders</h3>
//               <a href="#" className="text-green-600 hover:underline">View All</a>
//             </div>
//             <ul className="mt-4 space-y-2">
//               <li className="flex justify-between">
//                 <span>Order #ORD101</span>
//                 <span className="text-green-600">₹3,000</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Order #ORD102</span>
//                 <span className="text-green-600">₹2,500</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Order #ORD103</span>
//                 <span className="text-green-600">₹4,200</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Menu Management Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>Manage and update your catering menus for upcoming events.</p>
//             <a href="#" className="text-green-600 hover:underline mt-4 block">Manage Menus</a>
//           </div>
//         </div>

//         {/* Delivery Status Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Delivery Status</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>Track the delivery status of orders.</p>
//             <a href="#" className="text-green-600 hover:underline mt-4 block">View Deliveries</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatererHome;











// import React from 'react';
// import { Link } from 'react-router-dom';

// const CatererHomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6">Caterer Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Link to="/ManageOrders" className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
//           Manage Orders
//         </Link>
//         <Link to="/CateringRequests" className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center">
//           Client Special Requests
//         </Link>
//         <Link to="/DeliveryManagement" className="bg-yellow-500 text-white p-4 rounded-lg shadow-md text-center">
//           Delivery Management
//         </Link>
//         <Link to="/MenuManagement" className="bg-purple-500 text-white p-4 rounded-lg shadow-md text-center">
//           Setting Menus
//         </Link>
//         <Link to="/FeedbackManagement" className="bg-red-500 text-white p-4 rounded-lg shadow-md text-center">
//           Feedback Management
//         </Link>
//         <Link to="/OrderTracking" className="bg-indigo-500 text-white p-4 rounded-lg shadow-md text-center">
//           Order Tracking
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CatererHomePage;






import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaClipboardList, FaTruck, FaUtensils, FaCommentDots, FaMapMarkerAlt } from 'react-icons/fa';

const CatererHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Caterer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Manage Orders */}
        <Link to="/ManageOrders" className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            <FaTasks className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Manage Orders</h2>
          </div>
        </Link>
        
        {/* Client Special Requests */}
        <Link to="/CateringRequests" className="bg-green-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            <FaClipboardList className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Client Special Requests</h2>
          </div>
        </Link>

        {/* Delivery Management */}
        <Link to="/DeliveryManagement" className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            <FaTruck className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Delivery Management</h2>
          </div>
        </Link>

        {/* Setting Menus */}
        <Link to="/ManageMenu" className="bg-purple-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            <FaUtensils className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Setting Menus</h2>
          </div>
        </Link>

        {/* Feedback Management */}
        <Link to="/FeedbackManagement" className="bg-red-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            <FaCommentDots className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Feedback Management</h2>
          </div>
        </Link>

        {/* Order Tracking */}
        <Link to="/OrderTracking" className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Order Tracking</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CatererHomePage;

