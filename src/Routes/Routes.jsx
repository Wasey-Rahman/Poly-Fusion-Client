import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import NotFound from "../404_page/NotFound";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

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
        }
       
      ]
    },
    
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);