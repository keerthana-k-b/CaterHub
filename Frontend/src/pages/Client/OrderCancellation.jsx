import React, { useState } from 'react';

const OrderCancellation = () => {
  const [cancellationReason, setCancellationReason] = useState('');
  const [refundAmount, setRefundAmount] = useState('');
  const [eventDate, setEventDate] = useState('2024-10-10'); // Example event date (change to your logic)
  const [today] = useState(new Date());

  // Calculate if cancellation is allowed (more than 24 hours before the event)
  const eventDateObj = new Date(eventDate);
  const timeDifference = eventDateObj.getTime() - today.getTime();
  const isCancellable = timeDifference >= 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const handleProcessCancellation = () => {
    if (isCancellable) {
      // Logic to process cancellation
      console.log('Cancellation Processed:', { cancellationReason, refundAmount });
    } else {
      alert('Cancellation is not allowed within 24 hours of the event.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-extrabold text-red-600 mb-8 text-center">Order Cancellation</h1>

      {/* Display a warning if cancellation is not allowed */}
      {!isCancellable && (
        <div className="mb-6 bg-red-100 text-red-600 p-4 rounded-md">
          <p>Cancellations are only allowed up to 24 hours before the event. Refunds are not possible after that.</p>
        </div>
      )}

      {/* Cancellation Reason */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Cancellation Reason</label>
        <textarea
          value={cancellationReason}
          onChange={(e) => setCancellationReason(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter the reason for cancellation"
          rows="4"
          disabled={!isCancellable}
        />
      </div>

      {/* Refund Amount */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Refund Amount (₹)</label>
        <input
          type="number"
          value={refundAmount}
          onChange={(e) => setRefundAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter refund amount"
          min="0"
          step="0.01"
          disabled={!isCancellable}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleProcessCancellation}
          className={`${
            isCancellable ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'
          } text-white px-6 py-3 rounded-lg transition duration-300 font-bold`}
          disabled={!isCancellable}
        >
          Process Cancellation
        </button>
        <button
          onClick={() => console.log('Cancellation Cancelled')}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderCancellation;
