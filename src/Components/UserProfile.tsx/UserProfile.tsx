import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { app } from "../Firebase/Firebase";
import { RootState } from "../store/store";
import "./UserProfile.css"
function UserProfile(){
 const{cart,totalquantity,totalprice,} =  useSelector((state : RootState) => state.allcart)
 let auth = getAuth(app)
 let Signout= ()=>{
signOut(auth)
 }
return(
<div>
    <section className="vh-100" style={{
        backgroundColor : "#eee"
    }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">

        <div className="card" style={{
            borderRadius : 15
        }}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="rounded-circle img-fluid" style={{
                    width :100 
                }} />
            </div>
            <h4 className="mb-2">Julie L. Arsenault</h4>
            <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
                href="#!">mdbootstrap.com</a></p>
            <div className="mb-4 pb-2">
              <button type="button" className="btn btn-outline-primary btn-floating">
                <i className="fab fa-facebook-f fa-lg"></i>
              </button>
              <button type="button" className="btn btn-outline-primary btn-floating">
                <i className="fab fa-twitter fa-lg"></i>
              </button>
              <button type="button" className="btn btn-outline-primary btn-floating">
                <i className="fab fa-skype fa-lg"></i>
              </button>
            </div>
            <div className="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p className="mb-2 h5">Total Item</p>
                <p className="text-muted mb-0">{cart.length}</p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">TotalPrice</p>
                <p className="text-muted mb-0">{totalprice}</p>
              </div>
              <div>
                <p className="mb-2 h5">TotalQuantity</p>
                <p className="text-muted mb-0">{totalquantity}</p>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-rounded btn-lg mt-5" onClick={Signout}>
              Logout
            </button>
            </div>
            </div>
            </div>
</section>
<Outlet/>
</div>
)
}
export default UserProfile;