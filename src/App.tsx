import type { RouteObject } from "react-router-dom";
import {  useRoutes,} from "react-router-dom";
import SignIn from "./Components/Auth/Signin/Signin";
import CartPage from "./Components/Homepage/Card2/CartPage";
import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Homepage/Navbar/Navbar";
import "./App.css"
import Login from "./Components/Auth/Loginpage/Login";
import BurgerCategeory from "./Components/Categeory/Burger/Burger";
import SnackCategeory from "./Components/Categeory/Snack/Snack";
import VegatableCategeory from "./Components/Categeory/Vegatable/Vegatable";
import MyComponent from "./Components/Card4/Card23";
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
      path : "/check/spicy/burger",
      element: <BurgerCategeory/>,
  },
  {
    path : "/check/snack/food",
    element: <SnackCategeory/>,
},
{
  path : "/check/fresh/vegtable",
  element: <VegatableCategeory/>,
}
     ],
     },
   ];
   let element = useRoutes(routes);
  return (
    <div>
      <MyComponent/>
    </div>
  );
}