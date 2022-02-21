import React, { useState, useEffect } from "react";

import Table from "../../components/StockListing/Table";
import "./styles.module.css";

export type Stock = {
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

//Todo: Add proper pagination
const StockListing = (): JSX.Element => {
  const [data, setData] = useState<Stock[] | []>([]);
  const start: number = 0;
  const end: number = 10;

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(process.env.REACT_APP_STOCK_URL!);
      const data = await rawData.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Stock Listing</h2>
      {!data.length ? <h2>Loading...</h2> : Table(data, start, end)}
    </>
  );
};

export default StockListing;
