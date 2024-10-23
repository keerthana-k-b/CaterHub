import React, { useState } from 'react';

const OrderPlacementForm = () => {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [specialRequest, setSpecialRequest] = useState('');

  const menus = [
    { id: 1, name: 'Wedding Menu' },
    { id: 2, name: 'Birthday Menu' },
    { id: 3, name: 'Baptism Menu' },
    { id: 4, name: 'Corporate Menu' },
    { id: 5, name: 'Casual Gathering Menu' },
  ];

  const handlePlaceOrder = () => {
    // Logic to handle order placement can be added here
    console.log('Order placed:', { selectedMenu, eventDate, quantity, specialRequest });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-8 text-center">Place Your Catering Order</h1>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Select Menu</label>
        <select
          value={selectedMenu}
          onChange={(e) => setSelectedMenu(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select a menu</option>
          {menus.map(menu => (
            <option key={menu.id} value={menu.name}>{menu.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Event Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          min="1"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Special Requests</label>
        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter any special requests"
          rows="4"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handlePlaceOrder}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-bold"
        >
          Place Order
        </button>
        <button
          onClick={() => console.log('Cancelled')}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderPlacementForm;
