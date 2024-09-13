import React from 'react';

// Define the props interface with a type for 'onFilterChange'
interface FiltersProps {
  onFilterChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
    const filterStyle = {
        marginBottom: '20px',
      };
    
      const labelStyle = {
        marginRight: '10px',
      };
    
      const selectStyle = {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      };
  return (
    <div className="filters">
      <label>Sort By:</label>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="date">Date</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
};

export default Filters;
