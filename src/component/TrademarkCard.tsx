// components/TrademarkCard.js
import React, { useState } from 'react';

interface TrademarkCardProps {
  mark: string;
  registrationNumber: string;
  status: string;
  description: string;
  imageSrc: string;
  classInfo: string;
}

const TrademarkCard: React.FC<TrademarkCardProps> = ({
  mark,
  registrationNumber,
  status,
  description,
  imageSrc,
  classInfo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: isHovered
      ? '0 12px 24px rgba(0, 0, 0, 0.2)'
      : '0 6px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const logoStyle: React.CSSProperties = {
    width: '70px',
    height: '70px',
    marginRight: '20px',
    borderRadius: '12px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const detailsStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
    lineHeight: '1.5',
  };

  const statusStyle: React.CSSProperties = {
    color: status.includes('Live') ? '#28a745' : '#ff6347',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '16px',
  };

  const classStyle: React.CSSProperties = {
    fontSize: '13px',
    color: '#888',
    marginBottom: '10px',
  };

  const regNumberStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#555',
    marginTop: 'auto',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={mark} style={logoStyle} />
      <div style={detailsStyle}>
        <div style={titleStyle}>{mark}</div>
        <div style={classStyle}>Class: {classInfo}</div>
        <div style={descriptionStyle}>{description}</div>
        <div style={statusStyle}>{status}</div>
        <div style={regNumberStyle}>Reg. Number: {registrationNumber}</div>
      </div>
    </div>
  );
};

export default TrademarkCard;
