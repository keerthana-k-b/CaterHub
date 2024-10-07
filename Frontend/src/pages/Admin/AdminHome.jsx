import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-600 text-white">
        <div className="p-6 text-2xl font-bold">
          CaterHub Admin
        </div>
        <nav className="mt-5">
          <a href="#" className="block px-6 py-3 hover:bg-indigo-500">Dashboard</a>
          <Link to="/OrderManagement" className="block px-6 py-3 hover:bg-indigo-500">Orders</Link>
          <Link to="/MenuManagement" className="block px-6 py-3 hover:bg-indigo-500">Menu Management</Link>
          <Link to="/UserManagement" className="block px-6 py-3 hover:bg-indigo-500">User Management</Link>
          <Link to="/FeedbackManagement" className="block px-6 py-3 hover:bg-indigo-500">Feedback</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-700">Admin Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-2xl text-indigo-600">320</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Revenue</h2>
            <p className="text-2xl text-indigo-600">₹1,25,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">New Users</h2>
            <p className="text-2xl text-indigo-600">58</p>
          </div>
        </div>

        {/* Order Management Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <Link to="/OrderManagement" className="text-indigo-600 hover:underline">View All</Link>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between">
                <span>Order #ORD001</span>
                <span className="text-indigo-600">₹2,500</span>
              </li>
              <li className="flex justify-between">
                <span>Order #ORD002</span>
                <span className="text-indigo-600">₹3,200</span>
              </li>
              <li className="flex justify-between">
                <span>Order #ORD003</span>
                <span className="text-indigo-600">₹1,800</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Management Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Manage and update the menus available for events.</p>
            <Link to="/MenuManagement" className="text-indigo-600 hover:underline mt-4 block">Manage Menus</Link>
          </div>
        </div>

        {/* User Management Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>View and manage registered users of CaterHub.</p>
            <Link to="/UserManagemnet" className="text-indigo-600 hover:underline mt-4 block">Manage Users</Link>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Read customer feedback to improve services.</p>
            <Link to="/FeedbackManagement" className="text-indigo-600 hover:underline mt-4 block">View Feedback</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
