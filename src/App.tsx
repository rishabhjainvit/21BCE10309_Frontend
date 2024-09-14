// App.js
import React, { useState, useEffect } from 'react';
// import SearchBar from './component/SearchBar';
import TrademarkList from './component/TradeMarkList';
import Sidebar from './component/SideBar';
import Filters from './component/Filters';
import Header from './component/Header';
import TrademarkCard from './component/TrademarkCard';
import nikeLogo from './assest/Capture.png';
// import { fetchTrademarks } from './services/api'; 
interface Trademark {
  id: number;
  mark: string;
  details: string;
  status: string;
  classInfo: string;
  imageSrc: string;
}

const App: React.FC = () => {
  const [trademarks, setTrademarks] = useState<Trademark[]>([]);
  const [filteredTrademarks, setFilteredTrademarks] = useState<Trademark[]>([]);

  useEffect(() => {
    // Static data to replace the API
    const staticTrademarks: Trademark[] = [
      {
        id: 1,
        mark: 'Nike',
        details: 'Nike sportswear and accessories.',
        status: 'Registered',
        classInfo: '25 - Clothing',
        imageSrc: nikeLogo, // Static image source
      },
      {
        id: 2,
        mark: 'Nike',
        details: 'Nike sportswear and accessories.',
        status: 'Pending',
        classInfo: '25 - Clothing',
        imageSrc: nikeLogo, // You can add a different image
      },
      {
        id: 3,
        mark: 'Nike',
        details: 'Nike sportswear and accessories.',
        status: 'Registered',
        classInfo: '9 - Electronics',
        imageSrc: nikeLogo, // Same or different static image
      },
      {
        id: 4,
        mark: 'Nike',
        details: 'Nike sportswear and accessories.',
        status: 'Registered',
        classInfo: '9 - Electronics',
        imageSrc: nikeLogo, // Same or different static image
      },
      {
        id: 5,
        mark: 'Nike',
        details: 'Nike sportswear and accessories.',
        status: 'Registered',
        classInfo: '9 - Electronics',
        imageSrc: nikeLogo, // Same or different static image
      },
    ];

    // Set trademarks and filteredTrademarks with static data
    setTrademarks(staticTrademarks);
    setFilteredTrademarks(staticTrademarks);
  }, []);

  const handleSearch = (query: string) => {
    const result = trademarks.filter((trademark) =>
      trademark.mark.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTrademarks(result);
  };

  const handleFilterChange = (value: string) => {
    const sortedTrademarks = [...filteredTrademarks].sort((a, b) => {
      if (value === 'date') {
        return a.id - b.id;
      } else if (value === 'status') {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });
    setFilteredTrademarks(sortedTrademarks);
  };

  const appStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };

  const leftContentStyle: React.CSSProperties = {
    width: '75%',
    padding: '20px',
  };

  const rightContentStyle: React.CSSProperties = {
    width: '25%',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  };

  return (
    <div style={appStyle}>
      <Header /> {/* Add your Header component here */}

      <div style={contentStyle}>
        <div style={leftContentStyle}>
          <Filters onFilterChange={handleFilterChange} /> {/* Filter functionality */}

          {filteredTrademarks.map((trademark) => (
            <TrademarkCard
              key={trademark.id}
              mark={trademark.mark}
              registrationNumber={trademark.id.toString()}
              status={trademark.status}
              description={trademark.details}
              imageSrc={trademark.imageSrc}
              classInfo={trademark.classInfo}
            />
          ))}
        </div>

        <div style={rightContentStyle}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;