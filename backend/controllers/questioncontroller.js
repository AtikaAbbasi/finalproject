import Question from "../models/question.js";






export const createQuestion = async (req, res) => {
  try {

    // const userId = req.user.id;
    const { title, description, isPrivate } = req.body;

    const newQuestion = new Question({

      title,
      description,
      isPrivate,
      // userId: userId
    });

    await newQuestion.save();

    res.status(201).json({ message: "Question submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit question." });
  }


};













///////////////////////get allll

// Get all questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.status(200).json(questions); // ✅ Important: Send array directly
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
