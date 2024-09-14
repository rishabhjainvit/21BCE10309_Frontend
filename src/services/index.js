import React, { useState } from 'react';
import { searchTrademarks } from './api'; // Adjust the path as needed

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    owner: '',      // Owner filter
    lawFirm: '',    // Law firm filter
    attorney: '',   // Attorney filter
    status: '',     // Status filter
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const searchResults = await searchTrademarks(query, filters);
      setResults(searchResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search trademarks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Filters */}
      <div>
        <input
          type="text"
          name="owner"
          placeholder="Filter by Owner"
          value={filters.owner}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="lawFirm"
          placeholder="Filter by Law Firm"
          value={filters.lawFirm}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="attorney"
          placeholder="Filter by Attorney"
          value={filters.attorney}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Filter by Status"
          value={filters.status}
          onChange={handleFilterChange}
        />
      </div>

      {/* Search button */}
      <button onClick={handleSearch}>Search</button>

      {/* Loading, error, and results display */}
      {loading && <p>Searching...</p>}
      {error && <p>{error}</p>}
      {results.length > 0 && (
        <div>
          {results.map((result, index) => (
            <div key={index}>
              <h3>{result.mark}</h3>
              <p>{result.status}</p>
              {/* Add more result details here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
