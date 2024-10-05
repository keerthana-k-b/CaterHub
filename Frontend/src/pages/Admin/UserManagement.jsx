import React from 'react';

const UserManagement = () => {
    //UserManagementPage
  const users = [
    { id: 'USR001', name: 'John Doe', role: 'Client', registered: '2024-08-12' },
    { id: 'USR002', name: 'Jane Smith', role: 'Caterer', registered: '2024-08-15' },
    { id: 'USR003', name: 'Michael Johnson', role: 'Admin', registered: '2024-08-18' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">User ID</th>
              <th className="border-b p-4">Name</th>
              <th className="border-b p-4">Role</th>
              <th className="border-b p-4">Registered</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="p-4 border-b">{user.id}</td>
                <td className="p-4 border-b">{user.name}</td>
                <td className="p-4 border-b">{user.role}</td>
                <td className="p-4 border-b">{user.registered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
