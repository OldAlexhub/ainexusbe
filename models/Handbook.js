import mongoose from "mongoose";

const HandbookSchema = new mongoose.Schema({});

const HandbookModel = mongoose.model("handbook", HandbookSchema);

export default HandbookModel;
