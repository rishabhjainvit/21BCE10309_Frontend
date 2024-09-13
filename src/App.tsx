// App.js
import React, { useState } from 'react';
import SearchBar from './component/SearchBar';
import TrademarkList from './component/TradeMarkList';
import Sidebar from './component/SideBar';
import Filters from './component/Filters';
import Header from './component/Header';
import TrademarkCard from './component/TrademarkCard';

interface Trademark {
  id: number;
  mark: string;
  details: string;
  status: string;
  imageSrc: string;  // Add imageSrc for each trademark
}

const App: React.FC = () => {
  const [trademarks, setTrademarks] = useState<Trademark[]>([
    {
      id: 1,
      mark: 'Nike',
      details: 'Retail Footwear',
      status: 'Live',
      imageSrc: '/path-to-image/nike-logo.png',
    },
    {
      id: 2,
      mark: 'Adidas',
      details: 'Sports Apparel',
      status: 'Registered',
      imageSrc: '/path-to-image/adidas-logo.png',
    },
  ]);

  const [filteredTrademarks, setFilteredTrademarks] = useState<Trademark[]>(trademarks);

  // Handle search input
  const handleSearch = (query: string) => {
    const result = trademarks.filter(trademark =>
      trademark.mark.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTrademarks(result);
  };

  // Handle filter change (sort by date or status)
  const handleFilterChange = (value: string) => {
    const sortedTrademarks = [...filteredTrademarks].sort((a, b) => {
      if (value === 'date') {
        return a.id - b.id; // Replace with actual date logic
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
      {/* Header component */}
      <Header />
      
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      <div style={contentStyle}>
        <div style={leftContentStyle}>
          {/* Filters */}
          <Filters onFilterChange={handleFilterChange} />

          {/* Trademark List: Render individual TrademarkCard components */}
          {filteredTrademarks.map(trademark => (
            <TrademarkCard
              key={trademark.id}
              mark={trademark.mark}
              registrationNumber={trademark.id.toString()}  // Assuming id is the registration number
              status={trademark.status}
              description={trademark.details}
              imageSrc={trademark.imageSrc}  // Image source for trademark
            />
          ))}
        </div>

        <div style={rightContentStyle}>
          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;