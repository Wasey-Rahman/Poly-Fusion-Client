import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/main";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        
      ]
    },
  ]);