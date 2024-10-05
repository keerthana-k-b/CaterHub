import React from 'react';

const FeedbackManagement = () => {
  const feedbacks = [
    { id: 'FDB001', client: 'John Doe', rating: 5, comments: 'Excellent service!', date: '2024-09-15' },
    { id: 'FDB002', client: 'Jane Smith', rating: 4, comments: 'Great food, but late delivery.', date: '2024-09-16' },
    { id: 'FDB003', client: 'Michael Johnson', rating: 3, comments: 'Average experience.', date: '2024-09-17' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Feedback Management</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-4">Feedback ID</th>
              <th className="border-b p-4">Client</th>
              <th className="border-b p-4">Rating</th>
              <th className="border-b p-4">Comments</th>
              <th className="border-b p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map(feedback => (
              <tr key={feedback.id}>
                <td className="p-4 border-b">{feedback.id}</td>
                <td className="p-4 border-b">{feedback.client}</td>
                <td className="p-4 border-b">{feedback.rating} Stars</td>
                <td className="p-4 border-b">{feedback.comments}</td>
                <td className="p-4 border-b">{feedback.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackManagement;
