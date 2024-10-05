import React from 'react';

const DeliveryManagement = () => {
  const deliveries = [
    { id: 'DLV001', client: 'John Doe', status: 'Delivered', deliveryDate: '2024-10-05' },
    { id: 'DLV002', client: 'Jane Smith', status: 'Out for Delivery', deliveryDate: '2024-10-03' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Delivery Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Delivery ID</th>
              <th className="border-b p-4">Client</th>
              <th className="border-b p-4">Status</th>
              <th className="border-b p-4">Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map(delivery => (
              <tr key={delivery.id}>
                <td className="p-4 border-b">{delivery.id}</td>
                <td className="p-4 border-b">{delivery.client}</td>
                <td className="p-4 border-b">{delivery.status}</td>
                <td className="p-4 border-b">{delivery.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryManagement;
