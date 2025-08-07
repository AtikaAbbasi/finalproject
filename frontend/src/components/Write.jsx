import React, { useState } from "react";
import axios from "axios"; // 👈 axios import

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/questions`, {
        title,
        description,
        isPrivate,
      });

      alert(data.message || "Question submitted successfully!");

      // Clear form
      setTitle("");
      setDescription("");
      setIsPrivate(false);
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("Failed to submit question. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-900 text-center">
          Ask a Question
        </h2>

        {/* Question Title */}
        <label className="block mb-2 font-semibold text-purple-700">
          Question Title
        </label>
        <input
          type="text"
          placeholder="Enter question title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />

        {/* Question Description */}
        <label className="block mb-2 font-semibold text-purple-700">
          Question Description
        </label>
        <textarea
          placeholder="Describe your question"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={5}
          className="w-full p-3 mb-4 border border-purple-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        ></textarea>

        {/* Private Checkbox */}
        <div className="flex items-center mb-6">
          <input
            id="private"
            type="checkbox"
            checked={isPrivate}
            onChange={() => setIsPrivate(!isPrivate)}
            className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
          />
          <label
            htmlFor="private"
            className="ml-2 text-purple-700 font-medium select-none"
          >
            Mark as Private Question
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white font-semibold py-3 rounded hover:bg-purple-800 transition"
        >
          Submit Question
        </button>

        {/* Animation keyframes */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
        `}</style>
      </form>
    </div>
  );
};

export default Write;