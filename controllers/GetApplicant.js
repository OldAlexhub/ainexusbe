import ApplicantModel from "../models/Applicant.js";

const GetApplicant = async (req, res) => {
  try {
    const applicant = await ApplicantModel.find();

    res.status(200).json({ message: `Jobs data`, applicant });
  } catch (error) {
    res.status(500).sjon({ message: `Server Error!` });
  }
};

export default GetApplicant;
