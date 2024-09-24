import mongoose from "mongoose";

const FraudSchema = new mongoose.Schema({});

const FraudModel = mongoose.model("fraud", FraudSchema);

export default FraudModel;
