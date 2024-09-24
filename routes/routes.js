import Router from "express";
import Signup from "../controllers/Signup.js";
import Login from "../controllers/Login.js";
import GetJobs from "../controllers/GetJobs.js";
import GetApplicant from "../controllers/GetApplicant.js";
import GetAnalysis from "../controllers/GetAnalysis.js";
import JobPython from "../controllers/JobPython.js";
import GetPolicy from "../controllers/GetPolicies.js";
import GetFraud from "../controllers/GetFraud.js";
import GetTransactions from "../controllers/GetTransactions.js";
import GetFraudPython from "../controllers/GetFraudPython.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);

//Human Resources
router.get("/getjobs", GetJobs);
router.get("/getapplicant", GetApplicant);
router.get("/jobanalysis", GetAnalysis);
router.get("/jobsai", JobPython);
router.get("/policy/:searchedTerm", GetPolicy);
router.get("/frauddata", GetFraud);
router.get("/transactions", GetTransactions);
router.get("/fraudmachine", GetFraudPython);

export default router;
