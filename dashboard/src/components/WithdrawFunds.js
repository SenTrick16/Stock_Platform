import React from "react";
import { Link } from "react-router-dom";

const WithdrawFunds = () => {
  return (
    <div className="funds">
      <h3 className="title">Withdraw Funds</h3>
      <p>Withdraw funds directly to your registered bank account.</p>
      <p style={{ color: "#888", marginTop: "1rem" }}>
        This feature is coming soon.
      </p>
      <Link to="/funds" className="btn btn-blue" style={{ marginTop: "1.5rem", display: "inline-block" }}>
        ← Back to Funds
      </Link>
    </div>
  );
};

export default WithdrawFunds;
