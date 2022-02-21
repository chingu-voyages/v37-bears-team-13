import React from "react";

import { Stock } from "../../pages/StockListing/StockListing";

export default function Table(data: Stock[], start: number, amount: number) {
  return (
    <table>
      <tr>
        {React.Children.toArray(
          Object.keys(data[0]).map((key) => <th>{key}</th>)
        )}
      </tr>
      {React.Children.toArray(
        data
          .slice(start, amount)
          .map((item) => (
            <tr>
              {React.Children.toArray(
                Object.values(item).map((value) => <td>{value}</td>)
              )}
            </tr>
          ))
      )}
    </table>
  );
}
