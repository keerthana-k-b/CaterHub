import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Importing an icon

const MenuManagement = () => {
  const [menus, setMenus] = useState([
    { id: 'MNU001', title: 'Wedding Menu', active: true },
    { id: 'MNU002', title: 'Birthday Menu', active: true },
    { id: 'MNU003', title: 'Corporate Event Menu', active: false },
  ]);

  const [newMenuTitle, setNewMenuTitle] = useState('');
  const [newMenuActive, setNewMenuActive] = useState(true);

  const handleAddMenu = (e) => {
    e.preventDefault();
    const newMenu = {
      id: `MNU00${menus.length + 1}`, // Generate a new ID
      title: newMenuTitle,
      active: newMenuActive,
    };
    setMenus([...menus, newMenu]); // Update state with new menu
    setNewMenuTitle(''); // Reset input fields
    setNewMenuActive(true);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Menu Management</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border-b p-4 text-gray-600">Menu ID</th>
              <th className="border-b p-4 text-gray-600">Title</th>
              <th className="border-b p-4 text-gray-600">Status</th>
              <th className="border-b p-4 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menus.map(menu => (
              <tr key={menu.id} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="p-4 border-b text-gray-800">{menu.id}</td>
                <td className="p-4 border-b text-gray-800">{menu.title}</td>
                <td className="p-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    menu.active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>{menu.active ? 'Active' : 'Inactive'}</span>
                </td>
                <td className="p-4 border-b">
                  <button className="text-indigo-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Add New Menu Form */}
      <form onSubmit={handleAddMenu} className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Menu</h2>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-700" htmlFor="menuTitle">Menu Title</label>
          <input
            id="menuTitle"
            type="text"
            value={newMenuTitle}
            onChange={(e) => setNewMenuTitle(e.target.value)}
            className="border rounded-md p-2"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-2 text-gray-700" htmlFor="menuActive">Active</label>
          <input
            id="menuActive"
            type="checkbox"
            checked={newMenuActive}
            onChange={() => setNewMenuActive(!newMenuActive)}
            className="h-5 w-5"
          />
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-700 transition-colors duration-200">
          <FaPlus className="mr-2" />
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default MenuManagement;
