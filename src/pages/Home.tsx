import { useState,useEffect } from 'react';
import StockViewer from '../components/StockViewer';
import Listing from '../pages/StockListing/StockListing';
const Home = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedOnUser')
    if(loggedUser){
      setIsLoggedIn(true)
    }
  },[])
  
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
