import React, { CSSProperties } from 'react';

interface TrademarkCardProps {
  mark: string;
  registrationNumber: string;
  status: string;
  description: string;
  imageSrc: string;
}

const TrademarkCard: React.FC<TrademarkCardProps> = ({ mark, registrationNumber, status, description, imageSrc }) => {
  const cardStyle: CSSProperties = {
    display: 'flex',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
  };

  const imageStyle: CSSProperties = {
    width: '60px',
    height: '60px',
    marginRight: '20px',
  };

  const contentStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Explicitly typed as 'column'
  };

  return (
    <div style={cardStyle}>
      <img src={imageSrc} alt={mark} style={imageStyle} />
      <div style={contentStyle}>
        <h2>{mark}</h2>
        <p>Registration Number: {registrationNumber}</p>
        <p>Status: {status}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TrademarkCard;
