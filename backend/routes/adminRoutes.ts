import express from "express";
import { Router } from "express";
import {fetchStats,fetchAllStudents,deleteStudents,getStudentDetails} from "../Controllers/adminController";


const router = express.Router();

router.get("/viewStats",fetchStats);
router.get("/students", fetchAllStudents);
router.post("/deleteStudents",deleteStudents);
router.get("/students/:id", getStudentDetails);


export default router;