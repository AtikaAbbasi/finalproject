import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Signup from '../components/Siginup'
import  Myquestionapp from '../components/Myquestionapp' 
import Write from '../components/Write'
import Protectedroutes from '../components/Protectedroutes'
import ForgetPassword from '../pages/Forgetpassword'
import Resatepassword from '../components/Resatpassword'



const router = createBrowserRouter([

{
    Path: '/',
    element:<App/>,
    children:[
        {

        index : true,
        element:(
         <Home/>
        )
},{
    path: '/question',
    element: (
      <Protectedroutes>
          <Myquestionapp/>
      </Protectedroutes>
   
)},
    ]
},


{
    path: '/write',
    element: (
       <Protectedroutes>
          <Write/>
       </Protectedroutes>
       
)},

// {path:'/auth', element: <AuthForm/>}
{path: '/login', element: <Login/>},
{path: '/Signup', element: <Signup/>}
,{path:'/forget', element: <ForgetPassword/>}
,{path:'/reset/:token', element: <Resatepassword/>}

])




export default router