import express from 'express';
import { createQuestion } from "../controllers/questioncontroller.js";
import Question from '../models/question.js';
const router = express.Router();




router.post('/questions', createQuestion);

router.get("/allquestions", async (req, res) => {
  try {
    const questions = await Question.find({ isPublic: true }).sort({ createdAt: -1 });
    res.json({ success: true, questions });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch questions" });
  }
});
// router.get('allquestion',getAllQuestions )

export default router;
