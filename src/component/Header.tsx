import React from 'react';

const Header: React.FC = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  };

  return (
    <header style={headerStyle}>
      <div>
        <h1>Trademarkia</h1>
      </div>
      <div>
        <input type="text" placeholder="Search for a trademark..." />
        <button>Search</button>
      </div>
      <div>
        <button>Apply for Trademark</button>
      </div>
    </header>
  );
};

export default Header;
