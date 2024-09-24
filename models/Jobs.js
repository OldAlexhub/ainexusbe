import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({});

const JobsModel = mongoose.model("job", JobSchema);

export default JobsModel;
