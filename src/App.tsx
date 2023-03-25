import type { RouteObject } from "react-router-dom";
import {  useRoutes,} from "react-router-dom";
import SignIn from "./Components/Auth/Signin/Signin";
import CartPage from "./Components/Homepage/Card2/CartPage";
import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Homepage/Navbar/Navbar";
import UserConfiram from "./Components/Auth/State/State";
import UserProfile from "./Components/UserProfile.tsx/UserProfile";

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
           element: <UserConfiram/>,
         },
         {
           path : "/signin",
           element: <SignIn/>,
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
