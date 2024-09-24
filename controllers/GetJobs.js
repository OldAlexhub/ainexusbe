import JobsModel from "../models/Jobs.js";

const GetJobs = async (req, res) => {
  try {
    const jobs = await JobsModel.find();

    res.status(200).json({ message: `Jobs data`, jobs });
  } catch (error) {
    res.status(500).sjon({ message: `Server Error!` });
  }
};

export default GetJobs;
