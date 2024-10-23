// import React, { useState } from 'react';

// const Payment = () => {
//   const [orderID, setOrderID] = useState('ORD123'); // Sample order ID (this could come from your order system)
//   const [totalAmount, setTotalAmount] = useState(5000); // Sample total amount (replace with real data)
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [status, setStatus] = useState('Pending');

//   const paymentMethods = ['Credit Card', 'Bank Transfer', 'Cash', 'Online Payment'];

//   const handlePaymentSubmit = () => {
//     // Payment logic to integrate with backend or payment API
//     console.log('Payment submitted:', { orderID, totalAmount, paymentMethod });
//     setStatus('Completed'); // You can adjust this based on actual payment status from your system
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
//       <h1 className="text-2xl font-bold mb-6">Payment</h1>

//       <div className="mb-6">
//         <label className="block mb-2 font-medium text-gray-700">Order ID</label>
//         <input
//           type="text"
//           value={orderID}
//           readOnly
//           className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block mb-2 font-medium text-gray-700">Total Amount (₹)</label>
//         <input
//           type="text"
//           value={totalAmount}
//           readOnly
//           className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block mb-2 font-medium text-gray-700">Payment Method</label>
//         <select
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="">Select payment method</option>
//           {paymentMethods.map((method, index) => (
//             <option key={index} value={method}>
//               {method}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-6">
//         <label className="block mb-2 font-medium text-gray-700">Payment Status</label>
//         <input
//           type="text"
//           value={status}
//           readOnly
//           className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//         />
//       </div>

//       <div className="flex justify-end space-x-4">
//         <button
//           onClick={handlePaymentSubmit}
//           className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//         >
//           Submit Payment
//         </button>
//         <button
//           onClick={() => console.log('Payment Cancelled')}
//           className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;



import React, { useState } from 'react';

const Payment = () => {
  const [orderID, setOrderID] = useState('ORD123'); // Sample order ID (this could come from your order system)
  const [totalAmount, setTotalAmount] = useState(5000); // Sample total amount (replace with real data)
  const [paymentMethod, setPaymentMethod] = useState('');
  const [status, setStatus] = useState('Pending');

  const paymentMethods = ['Credit Card', 'Bank Transfer', 'Cash', 'Online Payment'];

  const handlePaymentSubmit = () => {
    // Payment logic to integrate with backend or payment API
    console.log('Payment submitted:', { orderID, totalAmount, paymentMethod });
    setStatus('Completed'); // You can adjust this based on actual payment status from your system
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg mt-8">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-6 text-center">Payment Details</h1>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Order ID</label>
        <input
          type="text"
          value={orderID}
          readOnly
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 font-semibold"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Total Amount (₹)</label>
        <input
          type="text"
          value={totalAmount}
          readOnly
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 font-semibold"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select payment method</option>
          {paymentMethods.map((method, index) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Payment Status</label>
        <input
          type="text"
          value={status}
          readOnly
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 font-semibold"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handlePaymentSubmit}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-bold"
        >
          Submit Payment
        </button>
        <button
          onClick={() => console.log('Payment Cancelled')}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 font-bold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Payment;
