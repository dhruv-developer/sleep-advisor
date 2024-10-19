import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/diary" className="text-white">Sleep Diary</Link></li>
        <li><Link to="/tips" className="text-white">Sleep Tips</Link></li>
        <li><Link to="/rewards" className="text-white">Rewards</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
