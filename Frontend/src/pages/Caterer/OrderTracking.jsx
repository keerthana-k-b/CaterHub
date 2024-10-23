import React from 'react';

const OrderTracking = () => {
  const orders = [
    { id: 'ORD001', client: 'John Doe', status: 'In Progress', eta: '45 minutes' },
    { id: 'ORD002', client: 'Jane Smith', status: 'Completed', eta: 'Delivered' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Order Tracking</h1>
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="border-b p-4">Order ID</th>
            <th className="border-b p-4">Client</th>
            <th className="border-b p-4">Status</th>
            <th className="border-b p-4">ETA</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="p-4 border-b">{order.id}</td>
              <td className="p-4 border-b">{order.client}</td>
              <td className="p-4 border-b">{order.status}</td>
              <td className="p-4 border-b">{order.eta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTracking;
