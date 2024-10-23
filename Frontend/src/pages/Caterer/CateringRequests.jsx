// import React from 'react';

// const CateringRequests = () => {
//   const requests = [
//     { id: 'REQ001', client: 'John Doe', request: 'Extra spices in biriyani', status: 'Pending' },
//     { id: 'REQ002', client: 'Jane Smith', request: 'No onions in salad', status: 'Completed' },
//   ];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Catering Requests</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <table className="w-full text-left">
//           <thead>
//             <tr>
//               <th className="border-b p-4">Request ID</th>
//               <th className="border-b p-4">Client</th>
//               <th className="border-b p-4">Request</th>
//               <th className="border-b p-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map(request => (
//               <tr key={request.id}>
//                 <td className="p-4 border-b">{request.id}</td>
//                 <td className="p-4 border-b">{request.client}</td>
//                 <td className="p-4 border-b">{request.request}</td>
//                 <td className="p-4 border-b">{request.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CateringRequests;




// import React, { useState } from 'react';

// const CateringRequests = () => {
//   const [sortBy, setSortBy] = useState('date');
//   const requests = [
//     { id: 'REQ001', client: 'Michael Johnson', request: 'Vegetarian menu for wedding', date: '2024-10-01' },
//     { id: 'REQ002', client: 'Sarah Lee', request: 'Extra dessert options for birthday', date: '2024-10-02' },
//     // Add more requests as needed
//   ];

//   // Sort requests based on selected criteria
//   const sortedRequests = [...requests].sort((a, b) => {
//     if (sortBy === 'client') {
//       return a.client.localeCompare(b.client);
//     }
//     return new Date(a.date) - new Date(b.date);
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold mb-6">Client Special Requests</h1>

//       {/* Sorting Options */}
//       <div className="mb-4">
//         <label className="mr-2">Sort by:</label>
//         <select 
//           className="border rounded p-2"
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//         >
//           <option value="date">Date</option>
//           <option value="client">Client Name</option>
//         </select>
//       </div>

//       {requests.length === 0 ? (
//         <p className="text-gray-600">No special requests available.</p>
//       ) : (
//         <table className="w-full bg-white rounded-lg shadow-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border-b p-4">Request ID</th>
//               <th className="border-b p-4">Client</th>
//               <th className="border-b p-4">Request</th>
//               <th className="border-b p-4">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedRequests.map(request => (
//               <tr 
//                 key={request.id} 
//                 className="cursor-pointer hover:bg-gray-100 transition-colors"
//                 onClick={() => alert(`Viewing request: ${request.request}`)} // Replace with actual navigation
//               >
//                 <td className="p-4 border-b">{request.id}</td>
//                 <td className="p-4 border-b">{request.client}</td>
//                 <td className="p-4 border-b">{request.request}</td>
//                 <td className="p-4 border-b">{request.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default CateringRequests;






import React, { useState } from 'react';
import { FaSort, FaUser, FaCalendar } from 'react-icons/fa';

const CateringRequests = () => {
  const [sortBy, setSortBy] = useState('date');
  const requests = [
    { id: 'REQ001', client: 'Michael Johnson', request: 'Vegetarian menu for wedding', date: '2024-10-01' },
    { id: 'REQ002', client: 'Sarah Lee', request: 'Extra dessert options for birthday', date: '2024-10-02' },
    // Add more requests as needed
  ];

  // Sort requests based on selected criteria
  const sortedRequests = [...requests].sort((a, b) => {
    if (sortBy === 'client') {
      return a.client.localeCompare(b.client);
    }
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Client Special Requests</h1>

      {/* Sorting Options */}
      <div className="mb-4 flex items-center">
        <label className="mr-2 font-semibold">Sort by:</label>
        <select 
          className="border rounded p-2 bg-white"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Date <FaSort className="inline" /></option>
          <option value="client">Client Name <FaUser className="inline" /></option>
        </select>
      </div>

      {requests.length === 0 ? (
        <p className="text-gray-600">No special requests available.</p>
      ) : (
        <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border-b p-4 text-left">Request ID</th>
              <th className="border-b p-4 text-left">Client</th>
              <th className="border-b p-4 text-left">Request</th>
              <th className="border-b p-4 text-left">Date <FaCalendar className="inline" /></th>
            </tr>
          </thead>
          <tbody>
            {sortedRequests.map(request => (
              <tr 
                key={request.id} 
                className="cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => alert(`Viewing request details for: ${request.request}`)} // Replace with actual navigation
              >
                <td className="p-4 border-b">{request.id}</td>
                <td className="p-4 border-b">{request.client}</td>
                <td className="p-4 border-b">{request.request}</td>
                <td className="p-4 border-b">{request.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CateringRequests;
