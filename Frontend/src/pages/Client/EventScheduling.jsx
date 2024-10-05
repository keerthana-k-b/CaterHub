import React, { useState } from 'react';

const EventScheduling = () => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [preferences, setPreferences] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSaveEvent = () => {
    // Logic to save the event can be added here
    console.log('Event saved:', { eventName, location, preferences, startTime, endTime, notes });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Event Scheduling</h1>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Event Name</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter event name"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter event location"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Preferences</label>
        <textarea
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter preferences"
          rows="4"
        />
      </div>

      <div className="mb-6 flex justify-between">
        <div className="w-1/2 pr-2">
          <label className="block mb-2 font-medium text-gray-700">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block mb-2 font-medium text-gray-700">End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter additional notes"
          rows="4"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSaveEvent}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Save Event
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

export default EventScheduling;
