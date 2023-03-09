import { Button, Menu } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Link, Outlet} from "react-router-dom"
import { TotalAmount } from "../store/slice";
import { RootState } from "../store/store";
function Navbar(){
    let {cart,totalquantity} = useSelector((state : RootState) => state.allcart)
   let dispatch =  useDispatch()
   useEffect(()=>{
    dispatch(TotalAmount())
   },[cart])
return(
    <div>
<nav className="navbar navbar-expand-lg bg-light navbar-light">
  <div className="container-fluid">
  <Link to="/"><a className="navbar-brand">Home</a></Link>
  <Link to="/Profile"><a className="navbar-brand">User</a></Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
        </li>
      </ul>
      <ul className="navbar-nav d-flex flex-row me-1">
      <Link to="/cart"> <a
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
                    <i className="fas fa-shopping-cart fa-2x"></i>
            <span className="badge rounded-pill badge-notification bg-danger">({totalquantity})</span>
          </a></Link>,
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
        </li>
      </ul>
      <form className="w-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Type query"
          aria-label="Search"
        />
      </form>
    </div>
  </div>
</nav>
<Outlet/>
    </div>
    
)
}
export default Navbar;