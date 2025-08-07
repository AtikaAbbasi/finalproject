import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { setToken, setUser } from '../utils/auth.js';

function Signup() {
    let navigate = useNavigate()

const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: ""
})


   //====================== sitting ============================
   
   const handleChange = (e) =>{
setformdata(
    {
    ...formdata,
  [e.target.name ]: e.target.value ,
}

)
 }
















 /// ========================= SIGN UP  ==============================

   const handleSignup = async(e) =>{
e.preventDefault()
try {

  console.log('before saving userrrrrrrr');
  
    const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, formdata)

    console.log('after saving userrrrrrrr');
if(data.success){
    console.log(" .....!!!",data);
    setToken(data.token);
    setUser(data?.userRef)
    /// reset form
    setformdata(
        {
            name: "",
            email: "",
            password: "",
        }
    );
    setTimeout(()=>{
        navigate('/')
    },200)
}else{

}

    
} catch (error) {(e)=> {
        console.log('Sigup Failed ')
    }
}

   }














































// /// ========================= SIGN UP  ==============================
// const handleSignup = async (e) => {
//   e.preventDefault();
//   try {
//     console.log('before saving userrrrrrrr');

//     const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, formdata);

   

//     if (data.success) {
//       console.log(" .....!!!", data.message, data.creatuser);
//       setToken(data.token);
//       setUser(data.creatuser);
//       console.log('after setting local storage');
//       // Reset form
//       setformdata({
//         name: "",
//         email: "",
//         password: "",
//       });

//       setTimeout(() => {
//         navigate('/');
//       }, 200);
//     } else {
//       console.log("Signup " , data.message , data);
//     }

//   } catch (error) {
//     console.log('Signup Failed ❌', error.message || error);
//   }
// };




  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9a9ae1] ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-purple-500 mb-6">Sign Up</h2>

        <form 
       onSubmit={handleSignup} 
        className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>

          </div>
<input
  name="name" // 👈 Add this
  value={formdata.name}
  onChange={handleChange}
  type="text"
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
<input
  name="email" // 👈 Add this
  value={formdata.email}
  onChange={handleChange}
  type="email"
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
  name="password" // 👈 Add this
  value={formdata.password}
  onChange={handleChange}
  type="password"
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>
          </div>

          <button className="w-full bg-purple-400 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-300">Sign Up</button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? 
          <NavLink to="/login">
            login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;