import StockViewer from '../components/StockViewer';
import Listing from '../pages/StockListing/StockListing';
import { useAppCtx } from 'context';

const Home = (): JSX.Element => {
  const { loggedIn } = useAppCtx();

  return (
    <div>
      <StockViewer
        stockView={loggedIn ? 'User Stock View' : 'Example Stock View'}
      />
      <Listing />
    </div>
  );
};

export default Home;
