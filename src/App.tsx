import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import CartPage from "./Components/Card2/CartPage";
import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/Signin/Signin";
import UserConfiram from "./Components/State/State";
import UserProfile from "./Components/UserProfile.tsx/UserProfile";

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/profile",
          element: <UserProfile />
        },
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
          element: <Signin/>,
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
