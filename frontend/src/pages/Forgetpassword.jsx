import React, { useState } from 'react'
import axios from 'axios'
const ForgetPassword = () => {

    
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleForgotPass = async (e) => {
     e.preventDefault();
    try {
     const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forget`, { email })
      setEmail("");
      setMessage(data.message);
      
    } catch {
      (e) => {
        console.log("Forgot session Failed : ", e);

      }
    }
  }

  return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <form 
        onSubmit={handleForgotPass}
         className="space-y-4">
          {message && <p className='text-green-500'>{message}</p>}
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-400 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Reset
          </button>
        </form>
      </div></div>

  )

}


export default ForgetPassword