import { useState } from 'react';

const AddFavoriteStock = (): JSX.Element => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stocks, setStocks] = useState([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const stockSymbol = e.target.value;
    setStockSymbol(stockSymbol);
  };
  const addStockSymbol = (symbol: string) => {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      stockSymbol: { value: string };
    };
    //@ts-ignore
    setStocks((previousState) => {
      return [...previousState, stockSymbol];
    });
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
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
      {/* for debugging until the backend is hooked up 
      {stocks.map((stock) => (
        <p>{stock}</p>
      ))} */}
    </div>
  );
};

export default AddFavoriteStock;
