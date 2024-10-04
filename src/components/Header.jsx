import React from 'react';
import { FaSatelliteDish } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-slate-800 to-indigo-900 text-white p-2">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <FaSatelliteDish className="text-yellow-400" />
          <span>NASA Disaster Resilience</span>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="dashboard" className="hover:text-yellow-400 transition-colors">Dashboard</Link>
            </li>
            <li>
              <Link to="alerts" className="hover:text-yellow-400 transition-colors">Alerts</Link>
            </li>
            <li>
              <Link to="report" className="hover:text-yellow-400 transition-colors">Report Incident</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
