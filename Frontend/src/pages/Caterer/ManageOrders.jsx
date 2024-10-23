// import React from 'react';

// const OrderManagementForCaterer = () => {
//   const orders = [
//     { id: 'ORD001', client: 'John Doe', status: 'In Progress', deliveryDate: '2024-10-05' },
//     { id: 'ORD002', client: 'Jane Smith', status: 'Completed', deliveryDate: '2024-10-03' },
//   ];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Order Management</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <table className="w-full text-left">
//           <thead>
//             <tr>
//               <th className="border-b p-4">Order ID</th>
//               <th className="border-b p-4">Client</th>
//               <th className="border-b p-4">Status</th>
//               <th className="border-b p-4">Delivery Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order.id}>
//                 <td className="p-4 border-b">{order.id}</td>
//                 <td className="p-4 border-b">{order.client}</td>
//                 <td className="p-4 border-b">{order.status}</td>
//                 <td className="p-4 border-b">{order.deliveryDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderManagementForCaterer;




import React from 'react';

const ManageOrders = () => {
  const orders = [
    { id: 'ORD001', client: 'John Doe', date: '2024-09-15', status: 'In Progress' },
    { id: 'ORD002', client: 'Jane Smith', date: '2024-09-16', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="border-b p-4">Order ID</th>
            <th className="border-b p-4">Client</th>
            <th className="border-b p-4">Date</th>
            <th className="border-b p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="p-4 border-b">{order.id}</td>
              <td className="p-4 border-b">{order.client}</td>
              <td className="p-4 border-b">{order.date}</td>
              <td className="p-4 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
