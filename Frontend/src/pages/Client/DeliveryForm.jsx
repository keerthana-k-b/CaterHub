import React, { useState } from 'react';

const DeliveryForm = () => {
  const [deliveryPerson, setDeliveryPerson] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [houseName, setHouseName] = useState('');
  const [place, setPlace] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  const deliveryPersons = ['John Doe', 'Jane Smith', 'Michael Johnson'];
  const deliveryStatuses = ['Pending', 'Out for Delivery', 'Delivered', 'Failed'];

  const handleUpdateDelivery = () => {
    // Logic to handle delivery update can be added here
    console.log('Delivery Updated:', { deliveryPerson, deliveryStatus, houseName, place, pincode, landmark, deliveryTime });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-8 text-center">Delivery Management</h1>

      {/* Delivery Person Selection */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Assigned Delivery Person</label>
        <select
          value={deliveryPerson}
          onChange={(e) => setDeliveryPerson(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select delivery person</option>
          {deliveryPersons.map((person, index) => (
            <option key={index} value={person}>
              {person}
            </option>
          ))}
        </select>
      </div>

      {/* Delivery Status Selection */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Delivery Status</label>
        <select
          value={deliveryStatus}
          onChange={(e) => setDeliveryStatus(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select delivery status</option>
          {deliveryStatuses.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Delivery Address Section */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Delivery Address</label>
        <div className="mb-4">
          <input
            type="text"
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="House Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Place"
          />
        </div>
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-2"
            placeholder="Pincode"
          />
          <input
            type="text"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-2"
            placeholder="Landmark"
          />
        </div>
      </div>

      {/* Delivery Time Picker */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Delivery Time</label>
        <input
          type="datetime-local"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleUpdateDelivery}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-bold"
        >
          Update Delivery
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

export default DeliveryForm;
