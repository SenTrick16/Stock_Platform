const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    status: {
      type: String,
      enum: ["PENDING", "EXECUTED", "CANCELLED"],
      default: "EXECUTED",
    },
  },
  { timestamps: true }
);

module.exports = { OrdersSchema };
