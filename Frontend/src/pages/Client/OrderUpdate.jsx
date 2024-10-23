import React, { useState } from 'react';

const OrderUpdate = () => {
  // Sample menu items
  const availableItems = [
    { id: 1, name: 'Chicken Biriyani', price: 250 },
    { id: 2, name: 'Kerala Sadhya', price: 200 },
    { id: 3, name: 'Paneer Tikka', price: 180 },
    { id: 4, name: 'Mango Shake', price: 60 },
    { id: 5, name: 'Ghee Rice', price: 100 },
  ];

  // State for managing selected items and their quantities
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Chicken Biriyani', price: 250, quantity: 2 },
    { id: 2, name: 'Kerala Sadhya', price: 200, quantity: 1 },
  ]);

  // State for calculating the total price
  const [totalPrice, setTotalPrice] = useState(() =>
    orderItems.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  // Handle adding new items to the order
  const handleAddItem = (newItemId) => {
    const selectedItem = availableItems.find((item) => item.id === parseInt(newItemId));
    const itemExists = orderItems.find((item) => item.id === selectedItem.id);

    if (itemExists) {
      // If the item already exists in the order, increment its quantity
      const updatedItems = orderItems.map((item) =>
        item.id === selectedItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setOrderItems(updatedItems);
    } else {
      // Add a new item to the order
      setOrderItems([...orderItems, { ...selectedItem, quantity: 1 }]);
    }
    updateTotalPrice();
  };

  // Handle updating the quantity of an existing item
  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedItems = orderItems.map((item) =>
      item.id === itemId ? { ...item, quantity: parseInt(newQuantity) } : item
    );
    setOrderItems(updatedItems);
    updateTotalPrice();
  };

  // Calculate the total price after changes
  const updateTotalPrice = () => {
    const newTotal = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotal);
  };

  // Handle saving the updated order
  const handleSaveOrder = () => {
    // Logic to save the updated order (could be API call)
    console.log('Updated Order:', orderItems);
    console.log('Total Price:', totalPrice);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-8 text-center">Update Your Order</h1>

      {/* Order Items List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Items</h2>
        <table className="w-full text-left bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-4">Item Name</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Price</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4">{item.name}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                    className="w-16 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    min="1"
                  />
                </td>
                <td className="p-4">₹{item.price}</td>
                <td className="p-4">₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Item */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Add More Items</label>
        <select
          onChange={(e) => handleAddItem(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select an item</option>
          {availableItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} (₹{item.price})
            </option>
          ))}
        </select>
      </div>

      {/* Total Price */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Total Price: <span className="text-indigo-600">₹{totalPrice}</span></h2>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSaveOrder}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-bold"
        >
          Save Order
        </button>
        <button
          onClick={() => console.log('Update Cancelled')}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderUpdate;
