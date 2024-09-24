import FraudModel from "../models/Fraud.js";

const GetFraud = async (req, res) => {
  try {
    const fraud = await FraudModel.find();

    res.status(200).json({ message: `Fraud data`, fraud });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default GetFraud;
