import express from 'express';
import { createQuestion, getAllQuestions } from "../controllers/questioncontroller.js";

const router = express.Router();




router.post('/questions', createQuestion);

router.get("/allquestions", getAllQuestions);


export default router;
