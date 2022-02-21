import React, { useState, useEffect } from "react";

import { data } from "../../temp/data";
import "./styles.module.css";

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
  // const [data, setData] = useState<Stock[] | []>(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const rawData = await fetch(process.env.REACT_APP_STOCK_URL!);
  //     const data = await rawData.json();
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);

  //Todo: use data from API
  return (
    <>
      <h2>Stock Listing</h2>
      <table>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th>{key}</th>
          ))}
        </tr>
        {data.map((item) => (
          <tr>
            {Object.values(item).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};

export default StockListing;
