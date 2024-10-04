import React, { useState } from 'react';

const ReportIncident = () => {
  const [incidentType, setIncidentType] = useState('');
  const [location, setLocation] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (incidentType && location) {
      setReportMessage(`Incident reported: ${incidentType} in ${location}.`);
    } else {
      setReportMessage('Please fill out both fields.');
    }
  }

  return (
    <section id="report" className="py-10 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Report an Incident
        </h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="incident-type" className="block text-lg font-medium text-gray-700 mb-2">
              Incident Type:
            </label>
            <select
              id="incident-type"
              value={incidentType}
              onChange={(e) => setIncidentType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
            >
              <option value="">--Select--</option>
              <option value="Flood">Flood</option>
              <option value="Wildfire">Wildfire</option>
              <option value="Earthquake">Earthquake</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="location-report" className="block text-lg font-medium text-gray-700 mb-2">
              Location:
            </label>
            <input
              type="text"
              id="location-report"
              placeholder="e.g., California"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Report
          </button>
        </form>

        <div className="incident-results text-center mt-6 text-xl">
          {reportMessage}
        </div>
      </div>
    </section>
  );
}

export default ReportIncident;
