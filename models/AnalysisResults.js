import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({});

const AnalysisModel = mongoose.model("job_analyses", AnalysisSchema);

export default AnalysisModel;
