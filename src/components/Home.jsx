import React from 'react';
import { Globe, AlertTriangle, BarChart2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-black to-indigo-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-6xl w-full">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            NASA Disaster Resilience Platform
          </h1>
          <p className="text-xl leading-relaxed mb-10 text-gray-300">
            Empowering communities with real-time disaster data and resilience tools using NASA's open data resources.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Real-Time Data Integration",
              description: "Access up-to-the-minute data on wildfires, hurricanes, and other natural disasters, powered by NASA's satellite data.",
              icon: <Globe className="w-12 h-12 mb-4 text-blue-400" />
            },
            {
              title: "Interactive Data Visualization",
              description: "Visualize disaster trends with interactive graphs and charts, offering valuable insights for disaster management.",
              icon: <BarChart2 className="w-12 h-12 mb-4 text-purple-400" />
            },
            {
              title: "Incident Reporting",
              description: "Empower citizens to report disaster incidents in real-time, helping responders manage disaster information more efficiently.",
              icon: <AlertTriangle className="w-12 h-12 mb-4 text-red-400" />
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              {feature.icon}
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
          onClick={() => navigate("/dashboard")}>
            Explore the Platform
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;