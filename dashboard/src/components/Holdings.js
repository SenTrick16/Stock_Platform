import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import {holdings} from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    axios
      .get("https://stock-platform-166c.onrender.com/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
        setLoadError("");
      })
      .catch((error) => {
        console.error("Unable to load holdings:", error);
        setLoadError(
          "Unable to load holdings. Make sure the backend and MongoDB are running."
        );
      });
  }, []);

const labels = allHoldings.map((subArray) => subArray["name"]);

const data={
  labels,
  datasets: [
    {
      label: "Stock Price",
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

  // Compute summary dynamically from holdings data
  const totalInvestment = allHoldings.reduce((sum, stock) => {
    return sum + (Number(stock.qty) || 0) * (Number(stock.avg) || 0);
  }, 0);

  const totalCurrentValue = allHoldings.reduce((sum, stock) => {
    return sum + (Number(stock.qty) || 0) * (Number(stock.price) || 0);
  }, 0);

  const totalPnL = totalCurrentValue - totalInvestment;
  const pnlPercent = totalInvestment !== 0
    ? ((totalPnL / totalInvestment) * 100).toFixed(2)
    : "0.00";
  const isPnLProfit = totalPnL >= 0;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      {loadError && <p className="error">{loadError}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;
              const curValue = qty * price;
              const pnl = curValue - avg * qty;
              const isProfit = pnl >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name || "-"}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net || "-"}</td>
                  <td className={dayClass}>{stock.day || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{totalCurrentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={isPnLProfit ? "profit" : "loss"}>
            {totalPnL.toFixed(2)} ({isPnLProfit ? "+" : ""}{pnlPercent}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />  
    </>
  );
};

export default Holdings;
