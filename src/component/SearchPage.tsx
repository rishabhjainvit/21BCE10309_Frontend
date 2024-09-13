import React, { useState } from 'react';
import './SearchPage.css'; // Import the CSS file

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [owner, setOwner] = useState('');
  const [lawFirm, setLawFirm] = useState('');
  const [attorney, setAttorney] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState('');

  // Function to handle search
  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      // Call the API with filters
      const response = await fetch(
        `API_ENDPOINT?query=${query}&owner=${owner}&lawFirm=${lawFirm}&attorney=${attorney}&status=${status}`
      );
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError('An error occurred while searching');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Trademark Search</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search trademark"
        />
      </div>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          placeholder="Owner"
        />
        <input
          type="text"
          value={lawFirm}
          onChange={(e) => setLawFirm(e.target.value)}
          placeholder="Law Firm"
        />
        <input
          type="text"
          value={attorney}
          onChange={(e) => setAttorney(e.target.value)}
          placeholder="Attorney"
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
        />
      </div>

      <button onClick={handleSearch}>Search</button>

      {/* Status Indicator */}
      {loading && <p className="status">Searching...</p>}
      {error && <p className="error">{error}</p>}
      {results && results.length === 0 && <p className="status">No Results Found</p>}
      {results && results.length > 0 && (
        <div className="results">
          {/* Render the search results here */}
          {results.map((result, index) => (
            <div key={index}>
              <p>{result.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
