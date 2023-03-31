import {  Menu } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Link, Outlet} from "react-router-dom"
import { TotalAmount } from "../../Reduxe/store/slice";
import { RootState } from "../../Reduxe/store/store";
import "./Navbar.css"
function Navbar(){
    let {cart,totalquantity} = useSelector((state : RootState) => state.allcart)
   let dispatch =  useDispatch()
   useEffect(()=>{
    dispatch(TotalAmount())
   },[cart])
return(
    <div className="navbar-set">
<Menu  mode="horizontal" style={{
     paddingBottom:5,
     display:"flex",
     justifyContent:"center",
     backgroundColor : " grey",
     color : "#fff"
}} items={[
  {
    label:<Link to="/">Home</Link>,
    key : "home"
  },
  {
    label:<Link to="/about">About</Link>,
    key : "About"
  }, {
    label:<Link to="/cart">Cart</Link>,
    key : "Cart"
  },
  {
    label:<Link to="/login">Signin</Link>,
    key : "Signin"
  },
]}/>
<Outlet/>
    </div>
    
)
}
export default Navbar;