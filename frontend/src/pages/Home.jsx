import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/allquestions`);
        const publicQuestions = res.data.filter(q => !q.isPrivate);
        setQuestions(publicQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-[#9a9ae1] p-4 md:p-8 hero ">
      <h1 className="text-3xl font-bold text-center text-white mb-8 drop-shadow">
        Public Questions
      </h1>

      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : questions.length === 0 ? (
        <p className="text-white text-center">No public questions available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => (
            <div
              key={q._id || q.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h2 className="text-lg font-semibold text-purple-700 mb-2">
                {q.title}
              </h2>
              <h2 className="font-semibold text-gray-500 mb-2">
                {q.description}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Asked by: {q.author || "Anonymous"}
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Date: {new Date(q.date || q.createdAt).toLocaleDateString()}
              </p>

              <div className="mt-2 border-t pt-3">
                <h3 className="text-sm font-semibold text-gray-700">Answer:</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {q.answer ? q.answer : "Not yet answered"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}