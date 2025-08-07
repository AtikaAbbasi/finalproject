import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { setToken, setUser } from '../utils/auth';
import axios from 'axios';

let  Login = () => {

    let navigate  = useNavigate()

const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: ""
})


    const handleChange = (e) => {
        setformdata(
            {
                ...formdata,
                [e.target.name]: e.target.value,
            }

        )
    }




    ///========================login///========================



    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`,
                { email: formdata.email, password: formdata.password })
            console.log(" .....!!!", data);
            if (data.success) {
                setToken(data.token);
                setUser(data?.user)
                /// reset form
                setformdata(
                    {
                        name: "",
                        email: "",
                        password: ""
                    }
                );
                navigate("/")

            } else {
                console.log("Login", data.message);
            }

        } catch {
            (e) => {
                console.log("Login Failed : ", e);

            }
        }
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-[#9a9ae1]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-purple-500 mb-6">Login</h2>

                <form
                    onSubmit={handleLogin}
                    className="space-y-4">
                  
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

                    <NavLink to="/forget">
                    <p className="text-center text-gray-600 pb-4">Forgetpassword</p>
                    </NavLink>
                   

                    <button  type='submit'
                    className="w-full bg-purple-400 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-300">Login</button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?
                    <NavLink to="/signup">
                        sign-up
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default Login;