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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Order Placement</h1>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Select Menu</label>
        <select
          value={selectedMenu}
          onChange={(e) => setSelectedMenu(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a menu</option>
          {menus.map(menu => (
            <option key={menu.id} value={menu.name}>{menu.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Event Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          min="1"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Special Requests</label>
        <textarea
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter any special requests"
          rows="4"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handlePlaceOrder}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Place Order
        </button>
        <button
          onClick={() => console.log('Cancelled')}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderPlacementForm;
