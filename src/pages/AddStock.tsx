import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFavoriteStock = (): JSX.Element => {
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [stocks, setStocks] = useState<string[]>([]);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStocks([...stocks, stockSymbol]);
    setStockSymbol('');
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Add A Stock</h2>
      <form onSubmit={handleSubmit}>
        <label>
          StockSymbol:
          <input
            type="text"
            name="stockSymbol"
            placeholder="Enter a stock symbol"
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddFavoriteStock;
