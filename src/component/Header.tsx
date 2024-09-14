import React, { useState } from 'react';
import { FaFilter, FaShareAlt } from 'react-icons/fa'; // Importing the necessary icons
import logo from './logo.png'; // Import the company logo

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search input
  const [filteredResults, setFilteredResults] = useState<string[]>([]); // State to hold the filtered results
  const [noResultsFound, setNoResultsFound] = useState(false); // State to track if no results were found

  // Sample data to search from
  const trademarks = [
    'Trademark One',
    'Trademark Two',
    'Logo One',
    'Logo Two',
    'Internet Brand Search',
    'Copyright One',
    'Copyright Two',
  ];

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Filter the trademarks based on the search query
    const results = trademarks.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    
    // Check if results are found or not
    if (results.length === 0 && query !== '') {
      setNoResultsFound(true); // Set to true if no results found
    } else {
      setNoResultsFound(false); // Reset if results are found
    }

    setFilteredResults(results);
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px 20px',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1,
  };

  const topRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 0',
  };

  const logoStyle: React.CSSProperties = {
    height: '50px', // Set the height of the logo image
    cursor: 'pointer',
    flexShrink: 0,
  };

  const linksRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    fontSize: '16px',
    justifyContent: 'left',
  };

  const linkStyle: React.CSSProperties = {
    color: '#000',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
  };

  const searchBarContainer: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexGrow: 1,
    marginLeft: '20px',
    position: 'relative',
    flexShrink: 0,
    maxWidth: '600px',
  };

  const inputStyle: React.CSSProperties = {
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    width: '500px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 30px',
    backgroundColor: '#4285f4',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const applyButtonStyle: React.CSSProperties = {
    padding: '12px 30px',
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    marginLeft: '30px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    flexShrink: 0,
  };

  const resultsDropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '60px',
    left: '0',
    width: '100%',
    maxHeight: '300px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    zIndex: 100,
  };

  const resultItemStyle: React.CSSProperties = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  const noResultsStyle: React.CSSProperties = {
    padding: '10px',
    textAlign: 'center',
    color: '#666',
  };

  const resultsInfoStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
    fontSize: '16px',
    color: '#666',
  };

  const iconsContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  return (
    <header style={headerStyle}>
      <div style={topRowStyle}>
        {/* Company logo */}
        <img src={logo} alt="Company Logo" style={logoStyle} />

        <div style={searchBarContainer}>
          <input
            type="text"
            placeholder="Search for a trademark..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ ...inputStyle }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#1a73e8')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
          />
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3079ed')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4285f4')}
          >
            Search
          </button>

          {searchQuery && (
            <div style={resultsDropdownStyle}>
              {noResultsFound ? (
                <div style={noResultsStyle}>No results found</div>
              ) : (
                filteredResults.map((result, index) => (
                  <div key={index} style={resultItemStyle}>
                    {result}
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <button
          style={applyButtonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e95b1e')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5722')}
        >
          Apply for Trademark
        </button>
      </div>

      <div style={linksRowStyle}>
        <a href="/trademarks" style={linkStyle}>Trademarks</a>
        <a href="/logos" style={linkStyle}>Logos</a>
        <a href="/internet-brand-search" style={linkStyle}>Internet Brand Search</a>
        <a href="/copyright" style={linkStyle}>Copyright</a>
      </div>

      <div style={resultsInfoStyle}>
        <span>About {filteredResults.length} Trademarks found for "{searchQuery}"</span>
        <div style={iconsContainerStyle}>
          <FaShareAlt size={20} color="#666" />
          <FaFilter size={20} color="#666" />
        </div>
      </div>
    </header>
  );
};

export default Header;
