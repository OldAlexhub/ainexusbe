import TransactionsModel from "../models/Transactions.js";

const GetTransactions = async (req, res) => {
  try {
    const transactions = await TransactionsModel.find();

    res.status(200).json({ message: `transactions data`, transactions });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default GetTransactions;
