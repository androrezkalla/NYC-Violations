import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DobViolations from './DobViolations';
import EcbViolations from './EcbViolations';
import FDNYViolations from './FDNYViolations';
import HomePage from './HomePage';
import './App.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/dob" className="hover:text-gray-300">
            DOB Violations
          </Link>
          <Link to="/ecb" className="hover:text-gray-300">
            ECB Violations
          </Link>
          <Link to="/fdny" className='hover:text-gray-300'>
            FDNY Violations
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dob" element={<DobViolations />} />
            <Route path="/ecb" element={<EcbViolations />} />
            <Route path="/fdny" element={<FDNYViolations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
