import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../404_page/NotFound";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instrutors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import InstructorHome from "../Pages/Dashboard/InstructorDashboard/InstructorHome";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import Add_A_Class from "../Pages/Dashboard/InstructorDashboard/Add_A_Class";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
      },
       {
            path:"/Instructors",
            element:<Instructors></Instructors>
        },
        {
          path:"/LogIn",
          element:<LogIn></LogIn>
        },
        {
          path:"/Register",
          element:<Register></Register>
        },
        {
          path:"/Classes",
          element:<Classes></Classes>
        }
       
      ]
    },
    {
      path:'Dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'MySelectedClasses',
          element:<PrivateRoute><MySelectedClasses></MySelectedClasses></PrivateRoute>
        },
            {
              path:"Payment",
              element:<PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
              path:'InstructorHome',
              element:<InstructorHome></InstructorHome>
            },
            {
              path:'AdminHome',
              element:<PrivateRoute><AdminHome></AdminHome></PrivateRoute>
            },
            
            {
              path:'Manage Users',
              element:<ManageUsers></ManageUsers>
            },
            {
              path:'Add_A_Class',
              element:<Add_A_Class></Add_A_Class>
            },
            {
              path:'MyClass',
              element:<MyClass></MyClass>
            },
            {
              path:'ManageClasses',
              element:<ManageClasses></ManageClasses>
            },
          ]
        },
       
        
      
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);