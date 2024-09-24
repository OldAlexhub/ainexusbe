import AnalysisModel from "../models/AnalysisResults.js";

const GetAnalysis = async (req, res) => {
  try {
    const analysis = await AnalysisModel.find();

    res.status(200).json({ message: `Analysis data`, analysis });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default GetAnalysis;
