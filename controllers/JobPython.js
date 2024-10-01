import axios from "axios";

const JobPython = async (req, res) => {
  try {
    // Call the Flask API
    const response = await axios.get(`${process.env.PYTHON_APP}/match`);

    // Assuming response is an array of objects
    const data = response.data; // No need to check `response.data.success` if it's a direct data response

    // Send the data back to the front-end
    res.status(200).json({ message: "Analysis", data: data });
  } catch (error) {
    // Handle any errors that occurred during the request
    res.status(500).json({ message: "Server Error!" });
  }
};

export default JobPython;
