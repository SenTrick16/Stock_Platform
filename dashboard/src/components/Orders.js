import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                const qty = Number(order.qty) || 0;
                const price = Number(order.price) || 0;
                const status = order.status || "EXECUTED";
                const statusClass =
                  status === "EXECUTED"
                    ? "profit"
                    : status === "CANCELLED"
                    ? "loss"
                    : "";
                const time = order.createdAt
                  ? new Date(order.createdAt).toLocaleTimeString()
                  : "-";
                return (
                  <tr key={index}>
                    <td>{order.name || "-"}</td>
                    <td>{qty}</td>
                    <td>{price.toFixed(2)}</td>
                    <td>{order.mode || "-"}</td>
                    <td className={statusClass}>{status}</td>
                    <td>{time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
