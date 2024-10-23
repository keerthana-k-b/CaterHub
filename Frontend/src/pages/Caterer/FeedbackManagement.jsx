// import React from 'react';

// const FeedbackManagement = () => {
//   // Sample feedback data
//   const feedbacks = [
//     {
//       id: 'FB001',
//       customer: 'John Doe',
//       event: 'Wedding',
//       feedback: 'The food was amazing, but the service could be faster.',
//       rating: 4,
//       date: '2024-10-01',
//     },
//     {
//       id: 'FB002',
//       customer: 'Jane Smith',
//       event: 'Birthday',
//       feedback: 'Excellent service and great variety of dishes!',
//       rating: 5,
//       date: '2024-10-03',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold mb-6">Feedback Management</h1>
//       <table className="w-full bg-white rounded-lg shadow-lg">
//         <thead>
//           <tr>
//             <th className="border-b p-4">Feedback ID</th>
//             <th className="border-b p-4">Customer</th>
//             <th className="border-b p-4">Event</th>
//             <th className="border-b p-4">Feedback</th>
//             <th className="border-b p-4">Rating</th>
//             <th className="border-b p-4">Date</th>
//             <th className="border-b p-4">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbacks.map(feedback => (
//             <tr key={feedback.id}>
//               <td className="p-4 border-b">{feedback.id}</td>
//               <td className="p-4 border-b">{feedback.customer}</td>
//               <td className="p-4 border-b">{feedback.event}</td>
//               <td className="p-4 border-b">{feedback.feedback}</td>
//               <td className="p-4 border-b">{feedback.rating} / 5</td>
//               <td className="p-4 border-b">{feedback.date}</td>
//               <td className="p-4 border-b">
//                 <button className="bg-blue-500 text-white p-2 rounded-lg">Reply</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FeedbackManagement;






// import React from 'react';
// import { FaReply } from 'react-icons/fa';

// const FeedbackManagement = () => {
//   // Sample feedback data
//   const feedbacks = [
//     {
//       id: 'FB001',
//       customer: 'John Doe',
//       event: 'Wedding',
//       feedback: 'The food was amazing, but the service could be faster.',
//       rating: 4,
//       date: '2024-10-01',
//     },
//     {
//       id: 'FB002',
//       customer: 'Jane Smith',
//       event: 'Birthday',
//       feedback: 'Excellent service and great variety of dishes!',
//       rating: 5,
//       date: '2024-10-03',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6">Feedback Management</h1>
//       <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="border-b p-4 text-left">Feedback ID</th>
//             <th className="border-b p-4 text-left">Customer</th>
//             <th className="border-b p-4 text-left">Event</th>
//             <th className="border-b p-4 text-left">Feedback</th>
//             <th className="border-b p-4 text-left">Rating</th>
//             <th className="border-b p-4 text-left">Date</th>
//             <th className="border-b p-4 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbacks.map(feedback => (
//             <tr 
//               key={feedback.id} 
//               className="hover:bg-gray-100 transition-colors"
//             >
//               <td className="p-4 border-b">{feedback.id}</td>
//               <td className="p-4 border-b">{feedback.customer}</td>
//               <td className="p-4 border-b">{feedback.event}</td>
//               <td className="p-4 border-b">{feedback.feedback}</td>
//               <td className="p-4 border-b">{feedback.rating} / 5</td>
//               <td className="p-4 border-b">{feedback.date}</td>
//               <td className="p-4 border-b">
//                 <button 
//                   className="bg-blue-500 text-white p-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors"
//                 >
//                   <FaReply className="mr-1" /> Reply
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FeedbackManagement;






import React from 'react';
import { FaReply } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const FeedbackManagement = () => {
  // Sample feedback data
  const feedbacks = [
    {
      id: 'FB001',
      customer: 'John Doe',
      event: 'Wedding',
      feedback: 'The food was amazing, but the service could be faster.',
      rating: 4.5,
      date: '2024-10-01',
    },
    {
      id: 'FB002',
      customer: 'Jane Smith',
      event: 'Birthday',
      feedback: 'Excellent service and great variety of dishes!',
      rating: 5,
      date: '2024-10-03',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Feedback Management</h1>
      <table className="w-full bg-white rounded-lg shadow-lg border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border-b p-4 text-left">Feedback ID</th>
            <th className="border-b p-4 text-left">Customer</th>
            <th className="border-b p-4 text-left">Event</th>
            <th className="border-b p-4 text-left">Feedback</th>
            <th className="border-b p-4 text-left">Rating</th>
            <th className="border-b p-4 text-left">Date</th>
            <th className="border-b p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr 
              key={feedback.id} 
              className="hover:bg-gray-100 transition-colors"
            >
              <td className="p-4 border-b">{feedback.id}</td>
              <td className="p-4 border-b">{feedback.customer}</td>
              <td className="p-4 border-b">{feedback.event}</td>
              <td className="p-4 border-b">{feedback.feedback}</td>
              <td className="p-4 border-b flex items-center">
                <div className="flex">
                  {renderStars(feedback.rating)}
                </div>
              </td>
              <td className="p-4 border-b">{feedback.date}</td>
              <td className="p-4 border-b">
                <button 
                  className="bg-blue-500 text-white p-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors"
                >
                  <FaReply className="mr-1" /> Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackManagement;
