// import React from 'react';

// const DeliveryManagement = () => {
//   const deliveries = [
//     { id: 'DLV001', client: 'John Doe', status: 'Delivered', deliveryDate: '2024-10-05' },
//     { id: 'DLV002', client: 'Jane Smith', status: 'Out for Delivery', deliveryDate: '2024-10-03' },
//   ];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Delivery Management</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <table className="w-full text-left">
//           <thead>
//             <tr>
//               <th className="border-b p-4">Delivery ID</th>
//               <th className="border-b p-4">Client</th>
//               <th className="border-b p-4">Status</th>
//               <th className="border-b p-4">Delivery Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {deliveries.map(delivery => (
//               <tr key={delivery.id}>
//                 <td className="p-4 border-b">{delivery.id}</td>
//                 <td className="p-4 border-b">{delivery.client}</td>
//                 <td className="p-4 border-b">{delivery.status}</td>
//                 <td className="p-4 border-b">{delivery.deliveryDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DeliveryManagement;





// import React from 'react';

// const DeliveryManagement = () => {
//   const deliveries = [
//     { id: 'DEL001', client: 'John Doe', status: 'On the way', date: '2024-09-15' },
//     { id: 'DEL002', client: 'Jane Smith', status: 'Delivered', date: '2024-09-16' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold mb-6">Delivery Management</h1>
//       <table className="w-full bg-white rounded-lg shadow-lg">
//         <thead>
//           <tr>
//             <th className="border-b p-4">Delivery ID</th>
//             <th className="border-b p-4">Client</th>
//             <th className="border-b p-4">Status</th>
//             <th className="border-b p-4">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {deliveries.map(delivery => (
//             <tr key={delivery.id}>
//               <td className="p-4 border-b">{delivery.id}</td>
//               <td className="p-4 border-b">{delivery.client}</td>
//               <td className="p-4 border-b">{delivery.status}</td>
//               <td className="p-4 border-b">{delivery.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DeliveryManagement;









import React from 'react';

const DeliveryManagement = () => {
  const deliveries = [
    { id: 'DEL001', client: 'John Doe', status: 'On the way', date: '2024-09-15' },
    { id: 'DEL002', client: 'Jane Smith', status: 'Delivered', date: '2024-09-16' },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-600';
      case 'On the way':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Format date using built-in JavaScript Date methods
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Delivery Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="border-b p-4">Delivery ID</th>
              <th className="border-b p-4">Client</th>
              <th className="border-b p-4">Status</th>
              <th className="border-b p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr key={delivery.id} className="hover:bg-gray-100 transition-colors">
                <td className="p-4 border-b">{delivery.id}</td>
                <td className="p-4 border-b">{delivery.client}</td>
                <td className="p-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-lg font-semibold ${getStatusBadgeClass(delivery.status)}`}
                  >
                    {delivery.status}
                  </span>
                </td>
                <td className="p-4 border-b">
                  {formatDate(delivery.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryManagement;
