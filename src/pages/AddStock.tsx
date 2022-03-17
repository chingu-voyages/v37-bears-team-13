import { useState } from 'react';

const AddFavoriteStock = (): JSX.Element => {
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [stocks, setStocks] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStocks([...stocks, stockSymbol]);

    setStockSymbol('');
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
      {stocks.map((stock, idx) => (
        <p key={idx}>{stock}</p>
      ))}
    </div>
  );
};

export default AddFavoriteStock;
