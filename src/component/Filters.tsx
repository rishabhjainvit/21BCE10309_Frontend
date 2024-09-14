import React from 'react';

interface FiltersProps {
  onFilterChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const filtersStyle: React.CSSProperties = {
    padding: '15px 0',
    marginBottom: '20px',
  };

  const hintStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '15px',
    backgroundColor: '#f0f8ff', // Light background to make the text stand out
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for a polished look
  };

  const hintTextStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: '#1a73e8', // Bright blue for highlighted keywords
  };

  const headerRowStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr 2fr',
    fontWeight: 'bold',
    fontSize: '16px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
  };

  const columnStyle: React.CSSProperties = {
    padding: '5px 10px',
  };

  return (
    <div className="filters" style={filtersStyle}>
      {/* Search Hint */}
      <div style={hintStyle}>
        Also try searching for: <span style={hintTextStyle}>nike*</span> or <span style={hintTextStyle}>*ike</span>
      </div>

      {/* Column Headers */}
      <div style={headerRowStyle}>
        <div style={columnStyle}>Mark</div>
        <div style={columnStyle}>Details</div>
        <div style={columnStyle}>Status</div>
        <div style={columnStyle}>Class/Description</div>
      </div>
    </div>
  );
};

export default Filters;
