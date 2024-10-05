import React from 'react';

const OrderManagementForCaterer = () => {
  const orders = [
    { id: 'ORD001', client: 'John Doe', status: 'In Progress', deliveryDate: '2024-10-05' },
    { id: 'ORD002', client: 'Jane Smith', status: 'Completed', deliveryDate: '2024-10-03' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Order Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Order ID</th>
              <th className="border-b p-4">Client</th>
              <th className="border-b p-4">Status</th>
              <th className="border-b p-4">Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="p-4 border-b">{order.id}</td>
                <td className="p-4 border-b">{order.client}</td>
                <td className="p-4 border-b">{order.status}</td>
                <td className="p-4 border-b">{order.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagementForCaterer;
