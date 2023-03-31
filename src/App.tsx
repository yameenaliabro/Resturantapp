import type { RouteObject } from "react-router-dom";
import {  useRoutes,} from "react-router-dom";
import SignIn from "./Components/Auth/Signin/Signin";
import CartPage from "./Components/Homepage/Card2/CartPage";
import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Homepage/Navbar/Navbar";
import UserConfiram from "./Components/Auth/State/State";
import "./App.css"
import Login from "./Components/Auth/Loginpage/Login";
import FodCategeory from "./Components/Categeory/CategeoryFood/FoodCategeory";
export default function App() {
   let routes: RouteObject[] = [
     {
       path: "/",
       element: <Navbar />,
       children: [
         { index: true, element: <Home /> },
         {
           path : "/cart",
           element: <CartPage/>,
         },
         {
           path : "/login",
           element: <Login/>,
         },
         {
           path : "/signin",
           element: <SignIn/>,
       },
       {
        path : "/login",
        element: <Login/>,
    },
    {
      path : "/Food/like",
      element: <FodCategeory/>,
  }
     ],
     },
   ];
   let element = useRoutes(routes);
  return (
    <div>
      {element}
    </div>
  );
}
