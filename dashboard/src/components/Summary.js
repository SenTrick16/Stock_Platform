import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://stock-platform-166c.onrender.com/allHoldings")
      .then((res) => setHoldings(res.data))
      .catch((err) => console.error("Summary: failed to load holdings", err));
  }, []);

  // Compute holdings summary dynamically
  const totalInvestment = holdings.reduce(
    (sum, s) => sum + (Number(s.qty) || 0) * (Number(s.avg) || 0),
    0
  );
  const totalCurrentValue = holdings.reduce(
    (sum, s) => sum + (Number(s.qty) || 0) * (Number(s.price) || 0),
    0
  );
  const totalPnL = totalCurrentValue - totalInvestment;
  const pnlPercent =
    totalInvestment !== 0
      ? ((totalPnL / totalInvestment) * 100).toFixed(2)
      : "0.00";
  const isPnLProfit = totalPnL >= 0;

  // Format large numbers as compact strings (e.g. 29875.55 → "29.88k")
  const toCompact = (val) => {
    if (Math.abs(val) >= 1000) {
      return (val / 1000).toFixed(2) + "k";
    }
    return val.toFixed(2);
  };

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isPnLProfit ? "profit" : "loss"}>
              {toCompact(Math.abs(totalPnL))}{" "}
              <small>
                {isPnLProfit ? "+" : "-"}{Math.abs(Number(pnlPercent)).toFixed(2)}%
              </small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{toCompact(totalCurrentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{toCompact(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;