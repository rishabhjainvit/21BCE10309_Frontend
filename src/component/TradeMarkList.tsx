import React from 'react';

interface Trademark {
  id: number;
  mark: string;
  details: string;
  status: string;
}

interface TrademarkListProps {
  trademarks: Trademark[];
}

const TrademarkList: React.FC<TrademarkListProps> = ({ trademarks }) => {
    const listStyle = {
        display: 'flex',
        flexDirection: 'column',
      };
    
      const itemStyle = {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      };
    
      const markStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
      };
    
      const detailsStyle = {
        margin: '5px 0',
      };
    
      const statusStyle = {
        color: '#007BFF',
        fontWeight: 'bold',
      };
    
  return (
    <div className="trademark-list">
      {trademarks.map((trademark) => (
        <div key={trademark.id} className="trademark-item">
          <div className="trademark-mark">{trademark.mark}</div>
          <div className="trademark-details">{trademark.details}</div>
          <div className={`trademark-status ${trademark.status.toLowerCase()}`}>
            {trademark.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrademarkList;
