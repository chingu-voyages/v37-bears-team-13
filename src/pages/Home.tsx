import { useState } from 'react';
import StockViewer from '../components/StockViewer';
import Listing from '../pages/StockListing/StockListing';
const Home = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <StockViewer
        stockView={isLoggedIn ? 'User Stock View' : 'Example Stock View'}
      />
      <Listing />
    </div>
  );
};

export default Home;
