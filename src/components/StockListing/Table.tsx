import React from 'react';
import '../../index.css';

import { Stock } from '../../pages/StockListing/StockListing';
export type DisplayStock = {
  currency: string;
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
};
const StockHeadings = [
  'currency',
  'description',
  'display symbol',
  'symbol',
  'type'
];
export default function Table(data: Stock[], howManyToDisplay: number) {
  const startAt: number = 0;
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            {StockHeadings.map((key) => (
              <th key={key}>{key.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {React.Children.toArray(
            data.slice(startAt, howManyToDisplay).map((item) => (
              <tr>
                {React.Children.toArray(
                  <>
                    <td>{item.currency}</td>
                    <td>{item.description}</td>
                    <td>{item.displaySymbol}</td>
                    <td>{item.symbol}</td>
                    <td>{item.type}</td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
