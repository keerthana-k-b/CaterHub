import React from 'react';

const OrderManagement = () => {
  console.log('OrderManagement Component Loaded'); // Debugging log

  const orders = [
    { id: 'ORD001', date: '2024-09-15', client: 'John Doe', total: 2500, status: 'Completed' },
    { id: 'ORD002', date: '2024-09-16', client: 'Jane Smith', total: 3200, status: 'Pending' },
    { id: 'ORD003', date: '2024-09-17', client: 'Michael Johnson', total: 1800, status: 'In Progress' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Orders Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Order ID</th>
              <th className="border-b p-4">Client</th>
              <th className="border-b p-4">Date</th>
              <th className="border-b p-4">Total</th>
              <th className="border-b p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="p-4 border-b">{order.id}</td>
                <td className="p-4 border-b">{order.client}</td>
                <td className="p-4 border-b">{order.date}</td>
                <td className="p-4 border-b">₹{order.total}</td>
                <td className="p-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-600' :
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                  }`}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
