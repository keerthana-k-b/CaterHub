import React, { useState } from 'react';

const MenuManagement = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: 'Biriyani', category: 'Main Course', price: 200 },
    { id: 2, name: 'Choru (Kerala Sadhya)', category: 'Main Course', price: 150 },
    { id: 3, name: 'Orange Juice', category: 'Drink', price: 50 },
  ]);

  const handleAddMenuItem = (newItem) => {
    setMenu([...menu, newItem]);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Item Name</th>
              <th className="border-b p-4">Category</th>
              <th className="border-b p-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item) => (
              <tr key={item.id}>
                <td className="p-4 border-b">{item.name}</td>
                <td className="p-4 border-b">{item.category}</td>
                <td className="p-4 border-b">₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add logic for adding new menu item */}
      </div>
    </div>
  );
};

export default MenuManagement;
