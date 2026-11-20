import React from "react";
import { Link } from "react-router-dom";

const AddFunds = () => {
  return (
    <div className="funds">
      <h3 className="title">Add Funds</h3>
      <p>Instant, zero-cost fund transfers with UPI.</p>
      <p style={{ color: "#888", marginTop: "1rem" }}>
        This feature is coming soon.
      </p>
      <Link to="/funds" className="btn btn-blue" style={{ marginTop: "1.5rem", display: "inline-block" }}>
        ← Back to Funds
      </Link>
    </div>
  );
};

export default AddFunds;
