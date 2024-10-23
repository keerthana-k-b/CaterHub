// import React, { useState } from 'react';

// const ManageMenu = () => {
//   const [menu, setMenu] = useState([
//     { id: 1, name: 'Biriyani', category: 'Main Course', price: 200 },
//     { id: 2, name: 'Choru (Kerala Sadhya)', category: 'Main Course', price: 150 },
//     { id: 3, name: 'Orange Juice', category: 'Drink', price: 50 },
//   ]);

//   const handleAddMenuItem = (newItem) => {
//     setMenu([...menu, newItem]);
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <table className="w-full text-left">
//           <thead>
//             <tr>
//               <th className="border-b p-4">Item Name</th>
//               <th className="border-b p-4">Category</th>
//               <th className="border-b p-4">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {menu.map((item) => (
//               <tr key={item.id}>
//                 <td className="p-4 border-b">{item.name}</td>
//                 <td className="p-4 border-b">{item.category}</td>
//                 <td className="p-4 border-b">₹{item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* Add logic for adding new menu item */}
//       </div>
//     </div>
//   );
// };

// export default ManageMenu;











// import React from 'react';

// const ManageMenu = () => {
//   const menus = [
//     { event: 'Wedding', menu: 'Vegetarian Feast', price: 5000 },
//     { event: 'Birthday', menu: 'Non-Veg Biriyani', price: 3200 },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold mb-6">Setting Menus</h1>
//       <table className="w-full bg-white rounded-lg shadow-lg">
//         <thead>
//           <tr>
//             <th className="border-b p-4">Event</th>
//             <th className="border-b p-4">Menu</th>
//             <th className="border-b p-4">Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menus.map((menu, index) => (
//             <tr key={index}>
//               <td className="p-4 border-b">{menu.event}</td>
//               <td className="p-4 border-b">{menu.menu}</td>
//               <td className="p-4 border-b">₹{menu.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageMenu;





// import React, { useState } from 'react';

// const ManageMenu = () => {
//   const [menu, setMenu] = useState([
//     { id: 1, name: 'Biriyani', category: 'Main Course', price: 200 },
//     { id: 2, name: 'Choru (Kerala Sadhya)', category: 'Main Course', price: 150 },
//     { id: 3, name: 'Orange Juice', category: 'Drink', price: 50 },
//   ]);
//   const [showModal, setShowModal] = useState(false);
//   const [newItem, setNewItem] = useState({ name: '', category: '', price: '' });

//   const handleAddMenuItem = () => {
//     if (newItem.name && newItem.category && newItem.price) {
//       setMenu([...menu, { ...newItem, id: menu.length + 1 }]);
//       setNewItem({ name: '', category: '', price: '' });
//       setShowModal(false);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-indigo-600 mb-6">Menu Management</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-indigo-600 text-white">
//               <th className="border-b p-4">Item Name</th>
//               <th className="border-b p-4">Category</th>
//               <th className="border-b p-4">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {menu.map((item) => (
//               <tr key={item.id} className="hover:bg-gray-100 transition-colors">
//                 <td className="p-4 border-b">{item.name}</td>
//                 <td className="p-4 border-b">{item.category}</td>
//                 <td className="p-4 border-b">₹{item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Floating Action Button to add new menu item */}
//       <button
//         onClick={() => setShowModal(true)}
//         className="fixed bottom-10 right-10 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700"
//       >
//         + Add Item
//       </button>

//       {/* Modal for adding new menu items */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
//             <h2 className="text-2xl font-bold mb-4">Add New Menu Item</h2>
//             <div className="mb-4">
//               <label className="block text-gray-700">Item Name</label>
//               <input
//                 type="text"
//                 value={newItem.name}
//                 onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//                 className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter item name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Category</label>
//               <input
//                 type="text"
//                 value={newItem.category}
//                 onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
//                 className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter item category"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Price</label>
//               <input
//                 type="number"
//                 value={newItem.price}
//                 onChange={(e) => setNewItem({ ...newItem, price: parseInt(e.target.value) })}
//                 className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter item price"
//               />
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//                 onClick={handleAddMenuItem}
//               >
//                 Add Item
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageMenu;




import React, { useState } from 'react';

const ManageMenu = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: 'Biriyani', category: 'Main Course', price: 200, description: 'Aromatic rice cooked with spices.', imageUrl: '/images/biriyani.jpg' },
    { id: 2, name: 'Choru (Kerala Sadhya)', category: 'Main Course', price: 150, description: 'Traditional Kerala meal served on a banana leaf.', imageUrl: '/images/sadhya.jpg' },
    { id: 3, name: 'Orange Juice', category: 'Drink', price: 50, description: 'Freshly squeezed orange juice.', imageUrl: '/images/orange-juice.jpg' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', category: '', price: '', description: '', imageUrl: '' });

  const handleAddMenuItem = () => {
    if (newItem.name && newItem.category && newItem.price && newItem.description && newItem.imageUrl) {
      setMenu([...menu, { ...newItem, id: menu.length + 1 }]);
      setNewItem({ name: '', category: '', price: '', description: '', imageUrl: '' });
      setShowModal(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Menu Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="border-b p-4">Item Name</th>
              <th className="border-b p-4">Category</th>
              <th className="border-b p-4">Price</th>
              <th className="border-b p-4">Description</th>
              <th className="border-b p-4">Image URL</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                <td className="p-4 border-b">{item.name}</td>
                <td className="p-4 border-b">{item.category}</td>
                <td className="p-4 border-b">₹{item.price}</td>
                <td className="p-4 border-b">{item.description}</td>
                <td className="p-4 border-b">
                  <a href={item.imageUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                    View Image
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Action Button to add new menu item */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-10 right-10 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700"
      >
        + Add Item
      </button>

      {/* Modal for adding new menu items */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
            <h2 className="text-2xl font-bold mb-4">Add New Menu Item</h2>

            {/* Item Name */}
            <div className="mb-4">
              <label className="block text-gray-700">Item Name</label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter item name"
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter item category"
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: parseInt(e.target.value) })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter item price"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter item description"
              />
            </div>

            {/* Image URL */}
            <div className="mb-4">
              <label className="block text-gray-700">Image URL</label>
              <input
                type="text"
                value={newItem.imageUrl}
                onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter image URL"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                onClick={handleAddMenuItem}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMenu;
