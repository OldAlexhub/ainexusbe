import axios from "axios";

const GetFraudPython = async (req, res) => {
  try {
    // Call the Python API to detect fraud
    const response = await axios.get("http://127.0.0.1:5000/fraud");

    const data = response.data;
    // console.log(data);
    // Check if fraud data is returned
    if (data && data.length > 0) {
      res.status(200).json({ message: "Fraudulent transactions found", data });
    } else {
      res.status(404).json({ message: "No fraudulent transactions detected" });
    }
  } catch (error) {
    console.error("Error detecting fraud:", error);
    res
      .status(500)
      .json({ message: "Failed to detect fraud", error: error.message });
  }
};
export default GetFraudPython;
