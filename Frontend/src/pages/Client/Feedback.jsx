import React, { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    // Logic to handle feedback submission can be added here
    console.log('Feedback submitted:', { rating, comments });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Client Feedback</h1>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Rating</label>
        <div className="flex space-x-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star} className="inline-flex items-center">
              <input
                type="radio"
                name="rating"
                value={star}
                onChange={(e) => setRating(e.target.value)}
                className="form-radio h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">{star} Star{star > 1 ? 's' : ''}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your comments or feedback"
          rows="4"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Submit
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

export default FeedbackForm;
