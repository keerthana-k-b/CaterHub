import React, { useState } from 'react';

const ClientProfile = () => {
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [preferences, setPreferences] = useState('');
  const [communicationHistory, setCommunicationHistory] = useState([
    '2024-09-15: Initial inquiry about catering services.',
    '2024-09-20: Follow-up email sent regarding menu options.',
    '2024-09-25: Confirmation of booking received.',
  ]);

  const handleSaveChanges = () => {
    // Logic to save changes can be added here
    console.log('Changes saved:', { name, newPassword, preferences });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Client Profile</h1>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Company/Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your company or name"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your current password"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your new password"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Preferences</label>
        <textarea
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your preferences"
          rows="4"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Communication History</label>
        <ul className="border border-gray-300 rounded-md p-2">
          {communicationHistory.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSaveChanges}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Save Changes
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

export default ClientProfile;
