import React, { useState, ChangeEvent } from 'react';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<string>('Owners');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
    setSearchQuery('');
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const ownersList = [
    { name: 'Anonymous', id: 1 },
    { name: 'LEGALFORCE RAPC.', id: 2 },
    { name: 'SpaceX Inc.', id: 3 },
    { name: 'SpaceX Inc.', id: 4 },
  ];

  const filteredList = ownersList.filter(owner =>
    owner.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const boxStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
    fontFamily: "'Roboto', sans-serif",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#333',
  };

  const buttonStyle: React.CSSProperties = {
    position: 'relative',  // Allows bullet positioning
    padding: '10px 15px',
    border: '2px solid #007bff',
    borderRadius: '20px',
    backgroundColor: 'white',
    color: '#007bff',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    width: 'calc(50% - 5px)', // 50% width with some spacing between buttons
    textAlign: 'center',
    marginBottom: '10px', // Ensure space between rows
    display: 'flex',
    alignItems: 'center', // Aligns the text and bullet vertically
    justifyContent: 'center', // Centers the content horizontally
  };

  const activeTabStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '10px',
    flexWrap: 'wrap', // Allows wrapping to new rows
  };

  const searchBarStyle: React.CSSProperties = {
    marginBottom: '15px',
  };

  const inputStyle: React.CSSProperties = {
    width: '90%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '10px',
    backgroundColor: '#fff',
  };

  const checkboxContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const checkboxStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  };

  const highlightStyle: React.CSSProperties = {
    backgroundColor: '#00c853',
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
  };

  const displayButtonStyle: React.CSSProperties = {
    width: 'calc(50% - 5px)', // Adjust for two buttons per row
    textAlign: 'center',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    marginBottom: '10px', // Space between rows
  };

  // Define a function to get bullet colors
  const getBulletColor = (status: string) => {
    switch (status) {
      case 'All':
        return '#ff5722'; // Orange
      case 'Registered':
        return '#4caf50'; // Green
      case 'Pending':
        return '#ffc107'; // Yellow
      case 'Abandoned':
        return '#f44336'; // Red
      case 'Others':
        return '#9c27b0'; // Purple
      default:
        return '#007bff'; // Default blue
    }
  };

  const bulletStyle = (status: string): React.CSSProperties => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: getBulletColor(status), // Apply bullet color
    marginRight: '10px', // Space between bullet and text
  });

  return (
    <div style={{ width: '300px' }}>
      {/* Status Box */}
      <div style={boxStyle}>
        <h3 style={titleStyle}>Status</h3>
        <div style={buttonContainerStyle}>
          {['All', 'Registered', 'Pending', 'Abandoned', 'Others'].map((status, index) => (
            <button
              key={index}
              style={buttonStyle}
            >
              <span style={bulletStyle(status)}></span> {/* Bullet point */}
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs/Search Box */}
      <div style={boxStyle}>
        <div style={buttonContainerStyle}>
          <button
            style={activeTab === 'Owners' ? activeTabStyle : buttonStyle}
            onClick={() => handleTabChange('Owners')}
          >
            Owners
          </button>
          <button
            style={activeTab === 'LawFirms' ? activeTabStyle : buttonStyle}
            onClick={() => handleTabChange('LawFirms')}
          >
            Law Firms
          </button>
          <button
            style={activeTab === 'Attorneys' ? activeTabStyle : buttonStyle}
            onClick={() => handleTabChange('Attorneys')}
          >
            Attorneys
          </button>
        </div>
        <div style={searchBarStyle}>
          <input
            type="text"
            placeholder={`Search ${activeTab}`}
            value={searchQuery}
            onChange={handleSearchChange}
            style={inputStyle}
          />
        </div>
        <div style={checkboxContainerStyle}>
          {filteredList.map(owner => (
            <div key={owner.id} style={checkboxStyle}>
              <input type="checkbox" id={`owner-${owner.id}`} />
              <label htmlFor={`owner-${owner.id}`}>
                {owner.name === 'Anonymous' ? (
                  <span style={highlightStyle}>{owner.name}</span>
                ) : (
                  owner.name
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Display Box */}
      <div style={boxStyle}>
        <h3 style={titleStyle}>Display</h3>
        <div style={buttonContainerStyle}>
          <button style={displayButtonStyle}>Grid View</button>
          <button style={displayButtonStyle}>List View</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
