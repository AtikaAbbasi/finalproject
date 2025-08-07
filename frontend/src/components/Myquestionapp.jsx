import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken, removeUser } from "../utils/auth";

const dummyQuestions = [
  { _id: "1", userId: "user1", title: "React kya hai?", isPrivate: true },
  { _id: "2", userId: "user2", title: "Firebase kaise use karein?", isPrivate: false },
  { _id: "3", userId: "user1", title: "CSS animations ke examples?", isPrivate: false },
  { _id: "4", userId: "user3", title: "Node.js vs Express?", isPrivate: true },
];

// Simulating logged-in user info (replace with your auth context or localStorage)
const loggedInUser = {
  _id: "user1",
  role: "user", // Change to "admin" to test admin view
};

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Normally, here you'd fetch from backend and filter
    // But for UI demo, we filter locally based on role:

    if (loggedInUser.role === "admin") {
      // Admin sees all questions
      setQuestions(dummyQuestions);
    } else {
      // User sees only their questions
      setQuestions(
        dummyQuestions.filter((q) => q.userId === loggedInUser._id)
      );
    }
  }, []);

  let navigate = useNavigate()
  
  let logout = ()=>{
    removeToken()
    removeUser()
    navigate('/')
  }

  return (

    <>
  

    
    <div className="hero min-h-screen bg-purple-50 p-6 sm:p-10">

      <button className="logout"
      onClick={logout}>
        <i class="fa-solid fa-right-from-bracket"></i>
        </button>

      <h1 className="text-4xl font-extrabold text-purple-900 mb-8 text-center">
        {loggedInUser.role === "admin"
          ? "All Questions (Admin View)"
          : "My Questions"}
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {questions.length === 0 ? (
          <p className="text-center text-purple-700 text-lg font-medium">
            No questions found.
          </p>
        ) : (
          questions.map(({ _id, title, isPrivate }) => (
            <div
              key={_id}
              className="bg-white rounded-lg shadow-md p-5 border border-purple-200
                         transform transition duration-300 hover:scale-105
                         animate-fadeIn"
            >
              <h2 className="text-xl font-semibold text-purple-900 mb-2">{title}</h2>
              <p
                className={`text-sm font-medium ${
                  isPrivate ? "text-purple-600" : "text-green-600"
                }`}
              >
                {isPrivate ? "Private Question" : "Public Question"}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </div>
   </> );
}