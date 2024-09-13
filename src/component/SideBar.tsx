// Sidebar.js
import React from 'react';

const Sidebar = () => {
    const sidebarStyle = {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      };
  return (
    <div className="sidebar">
      <h3>Apply for Trademark</h3>
      <div className="apply-form">
        <label>Trademark Name:</label>
        <input type="text" placeholder="Enter Trademark Name" />
        <label>Country:</label>
        <select>
          <option>United States</option>
          <option>Canada</option>
          <option>UK</option>
        </select>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Sidebar;
