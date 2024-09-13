import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const searchBarStyle = {
    display: 'flex',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '80%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search trademarks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>Search</button>
    </div>
  );
};

export default SearchBar;
