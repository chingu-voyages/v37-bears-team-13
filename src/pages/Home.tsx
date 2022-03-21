import Listing from '../pages/StockListing/StockListing';
import { useAppCtx } from 'context';
const titleStyle = {
  fontSize: '1.4rem',
  fontWeight: '700'
};
const Home = (): JSX.Element => {
  const { loggedIn } = useAppCtx();
  return (
    <div className="container">
      <div style={titleStyle}>
        {loggedIn ? 'User Stock View' : 'Example Stock View'}
      </div>
      <Listing />
    </div>
  );
};

export default Home;
