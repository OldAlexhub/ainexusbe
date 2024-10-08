import axios from "axios";

const GetPolicy = async (req, res) => {
  try {
    const { searchedTerm } = req.params;
    // console.log(searchedTerm);
    const response = await axios.get(
      `${process.env.PYTHON_APP}/handbook/${searchedTerm}`
    );

    const data = response.data;
    // console.log(data);
    res.status(200).json({ message: `Policies`, data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!`, error: error.message });
  }
};

export default GetPolicy;
