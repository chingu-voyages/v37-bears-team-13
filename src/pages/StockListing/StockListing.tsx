import React, { useState, useEffect } from 'react';

import Table from '../../components/StockListing/Table';
import './styles.module.css';

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

const finnhubURL = 'https://finnhub.io/api/v1'

//Todo: Add proper pagination
const StockListing = (): JSX.Element => {
  const [data, setData] = useState<Stock[] | []>([]);
  const howManyToDisplay: number = 10;

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(`${finnhubURL}/stock/symbol?exchange=US&token=${process.env.REACT_APP_STOCK_KEY}`!);
      const data = await rawData.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Stock Listing</h2>
      {!data.length ? <h2>Loading...</h2> : Table(data, howManyToDisplay)}
    </>
  );
};

export default StockListing;
