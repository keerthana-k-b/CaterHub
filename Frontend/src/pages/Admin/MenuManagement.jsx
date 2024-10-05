import React from 'react';

const MenuManagement = () => {
    //MenuManagementPage
  const menus = [
    { id: 'MNU001', title: 'Wedding Menu', active: true },
    { id: 'MNU002', title: 'Birthday Menu', active: true },
    { id: 'MNU003', title: 'Corporate Event Menu', active: false },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Menu ID</th>
              <th className="border-b p-4">Title</th>
              <th className="border-b p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {menus.map(menu => (
              <tr key={menu.id}>
                <td className="p-4 border-b">{menu.id}</td>
                <td className="p-4 border-b">{menu.title}</td>
                <td className="p-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    menu.active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>{menu.active ? 'Active' : 'Inactive'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Add New Menu
        </button>
      </div>
    </div>
  );
};

export default MenuManagement;
