import React from 'react';

type Trademark = {
  id: number;
  mark: string;
  details: string;
  status: string;
  classInfo: string;
  imageSrc: string;
  registeredDate: string;
  registrationNumber: string; // Registration Number
};

interface TrademarkListProps {
  trademarks: Trademark[];
}

const TrademarkList: React.FC<TrademarkListProps> = ({ trademarks }) => {
  // Styles
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%', // Ensure the container takes full width
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    padding: '15px',
    backgroundColor: '#f2f2f2',
    borderBottom: '2px solid #e0e0e0',
    width: '100%',
    boxSizing: 'border-box', // Ensure padding doesn't affect width
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    width: '100%',
    boxSizing: 'border-box',
  };

  const columnStyle: React.CSSProperties = {
    flex: 1, // Columns will take up the same amount of space
    textAlign: 'left',
    padding: '0 20px', // Adding more padding for better spacing
  };

  // Updated Image Styles to make it more attractive
  const imageStyle: React.CSSProperties = {
    width: '120px', // Increased width
    height: '120px', // Increased height
    objectFit: 'contain',
    borderRadius: '12px', // Rounded corners for attractiveness
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow for depth
    border: '2px solid #e0e0e0', // Light border around the image
    marginBottom: '10px',
  };

  const markStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const detailsTextStyle: React.CSSProperties = {
    color: '#333',
    marginBottom: '5px',
  };

  const statusStyle: React.CSSProperties = {
    color: '#ff4d4f', // Red for registered
    fontWeight: 'bold',
  };

  const classInfoStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#777',
  };

  return (
    <div style={containerStyle}>
      {/* Header Row */}
      <div style={headerStyle}>
        <div style={columnStyle}>Mark </div>
        <div style={columnStyle}>Details</div>
        <div style={columnStyle}>Status</div>
        <div style={columnStyle}>Class/Description</div>
      </div>

      {/* Trademark Data Rows */}
      {trademarks.map((trademark) => (
        <div key={trademark.id} style={rowStyle}>
          {/* Mark Column */}
          <div style={columnStyle}>
            <img src={trademark.imageSrc} alt={trademark.mark} style={imageStyle} />
            <div style={markStyle}>{trademark.mark}</div>
          </div>

          {/* Details Column */}
          <div style={columnStyle}>
            <div style={detailsTextStyle}>Registered Date: {trademark.registeredDate}</div>
            <div style={detailsTextStyle}>Reg. Number: {trademark.registrationNumber}</div>
          </div>

          {/* Status Column */}
          <div style={columnStyle}>
            <div style={statusStyle}>{trademark.status}</div>
          </div>

          {/* Class/Description Column */}
          <div style={columnStyle}>
            <div style={classInfoStyle}>Class: {trademark.classInfo}</div>
            <div style={detailsTextStyle}>{trademark.details}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrademarkList;
