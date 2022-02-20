import { useState } from 'react';
import StockViewer from '../components/StockViewer';

const Home = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <StockViewer
        stockView={isLoggedIn ? 'User Stock View' : 'Example Stock View'}
      />
    </div>
  );
};

export default Home;
