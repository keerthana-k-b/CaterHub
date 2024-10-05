import React from 'react';

const CatererHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-600 text-white">
        <div className="p-6 text-2xl font-bold">
          CaterHub Caterer
        </div>
        <nav className="mt-5">
          <a href="#" className="block px-6 py-3 hover:bg-green-500">Dashboard</a>
          <a href="#" className="block px-6 py-3 hover:bg-green-500">Orders</a>
          <a href="#" className="block px-6 py-3 hover:bg-green-500">Menu Management</a>
          <a href="#" className="block px-6 py-3 hover:bg-green-500">Delivery Status</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-700">Caterer Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Upcoming Orders</h2>
            <p className="text-2xl text-green-600">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Menus Available</h2>
            <p className="text-2xl text-green-600">5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Deliveries in Progress</h2>
            <p className="text-2xl text-green-600">3</p>
          </div>
        </div>

        {/* Order Management Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <a href="#" className="text-green-600 hover:underline">View All</a>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between">
                <span>Order #ORD101</span>
                <span className="text-green-600">₹3,000</span>
              </li>
              <li className="flex justify-between">
                <span>Order #ORD102</span>
                <span className="text-green-600">₹2,500</span>
              </li>
              <li className="flex justify-between">
                <span>Order #ORD103</span>
                <span className="text-green-600">₹4,200</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Management Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Manage and update your catering menus for upcoming events.</p>
            <a href="#" className="text-green-600 hover:underline mt-4 block">Manage Menus</a>
          </div>
        </div>

        {/* Delivery Status Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Delivery Status</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Track the delivery status of orders.</p>
            <a href="#" className="text-green-600 hover:underline mt-4 block">View Deliveries</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatererHome;
