import React, { useState, useEffect } from "react";

type Stock = {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  isin: null;
  mic: string;
  shareClassFIGI: string;
  symbol: string;
  symbol2: string;
  type: string;
};

const StockListing = (): JSX.Element => {
  const [data, setData] = useState<Stock[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(process.env.REACT_APP_STOCK_URL!);
      const data = await rawData.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <table>
      <tr>
        {data.map((item) => Object.keys(item).map((key) => <th>{key}</th>))}
      </tr>

      <tr>
        {data.map((item: Stock) =>
          Object.values(item).map((value) => <td>{value}</td>)
        )}
      </tr>
    </table>
  );
};

export default StockListing;
