import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema({});

const ApplicantModel = mongoose.model("applicant", ApplicantSchema);

export default ApplicantModel;
