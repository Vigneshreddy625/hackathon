import React, { useState } from 'react';

const Alerts = () => {
  const [location, setLocation] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      setAlertMessage(`Fetching alerts for ${location}...`);
      setTimeout(() => {
        setAlertMessage(`Alert: Severe flood risk in ${location}.`);
      }, 1000);
    } else {
      setAlertMessage('Please enter a location.');
    }
  }

  return (
    <section id="alerts" className="py-10 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Get Disaster Alerts
        </h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="location" className="block text-lg font-medium text-gray-700 mb-2">
              Enter your location:
            </label>
            <input
              type="text"
              id="location"
              placeholder="e.g., New York"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Get Alerts
          </button>
        </form>
        <div className="alert-results text-center mt-6 text-xl">
          {alertMessage}
        </div>
      </div>
    </section>
  );
}

export default Alerts;
