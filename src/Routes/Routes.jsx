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
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'MySelectedClasses',
          element:<PrivateRoute><MySelectedClasses></MySelectedClasses></PrivateRoute>
        },
            {
              path:"Payment",
              element:<PrivateRoute><Payment></Payment></PrivateRoute>
            }
          ]
        },
        
      
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);