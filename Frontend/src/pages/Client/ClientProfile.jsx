import React, { useState } from 'react';

const ClientProfile = () => {
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [preferences, setPreferences] = useState('');
  const [communicationHistory] = useState([
    '2024-09-15: Initial inquiry about catering services.',
    '2024-09-20: Follow-up email sent regarding menu options.',
    '2024-09-25: Confirmation of booking received.',
  ]);

  const handleSaveChanges = () => {
    // Logic to save changes can be added here
    console.log('Changes saved:', { name, newPassword, preferences });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-8 text-center">Client Profile</h1>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Company/Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your company or name"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your current password"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your new password"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Preferences</label>
        <textarea
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your preferences"
          rows="4"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Communication History</label>
        <ul className="border border-gray-300 rounded-lg p-4 bg-gray-50">
          {communicationHistory.map((item, index) => (
            <li key={index} className="py-2 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSaveChanges}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-bold"
        >
          Save Changes
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

export default ClientProfile;
