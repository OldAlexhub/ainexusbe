import mongoose from "mongoose";

const TransactionsSchema = new mongoose.Schema({});

const TransactionsModel = mongoose.model("transaction", TransactionsSchema);

export default TransactionsModel;
