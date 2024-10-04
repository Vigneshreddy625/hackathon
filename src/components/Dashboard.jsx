import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-8 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Real-time Disaster Dashboard
        </h2>
        <div className="map-container h-96 w-full rounded-lg shadow-lg overflow-hidden">
          <MapContainer
            center={[51.505, -0.09]} 
            zoom={5}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>Current Disaster Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
