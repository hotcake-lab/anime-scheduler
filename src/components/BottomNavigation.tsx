
import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavigation.css';
import { House, Calendar, Library, Heart, Settings } from 'lucide-react';




const BottomNavigation: React.FC = () => {
  return (
    <nav className="NavContainer">
      <NavLink to="/" end className="NavItem">
        <House size={24} />
        <span className="NavText">Home</span>
      </NavLink>
      <NavLink to="/calendar" className="NavItem">
        <Calendar size={24} />
        <span className="NavText">Calendar</span>
      </NavLink>
      <NavLink to="/library" className="NavItem">
        <Library size={24} />
        <span className="NavText">Library</span>
      </NavLink>
      <NavLink to="/myanime" className="NavItem">
        <Heart size={24} />
        <span className="NavText">MyAnime</span>
      </NavLink>
      <NavLink to="/settings" className="NavItem">
        <Settings size={24} />
        <span className="NavText">Settings</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavigation;
