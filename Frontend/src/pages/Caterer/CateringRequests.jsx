import React from 'react';

const CateringRequests = () => {
  const requests = [
    { id: 'REQ001', client: 'John Doe', request: 'Extra spices in biriyani', status: 'Pending' },
    { id: 'REQ002', client: 'Jane Smith', request: 'No onions in salad', status: 'Completed' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Catering Requests</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Request ID</th>
              <th className="border-b p-4">Client</th>
              <th className="border-b p-4">Request</th>
              <th className="border-b p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request.id}>
                <td className="p-4 border-b">{request.id}</td>
                <td className="p-4 border-b">{request.client}</td>
                <td className="p-4 border-b">{request.request}</td>
                <td className="p-4 border-b">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CateringRequests;
