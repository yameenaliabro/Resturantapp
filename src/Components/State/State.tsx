import { useEffect,useState} from 'react';
 import { getAuth, onAuthStateChanged,signOut} from 'firebase/auth';
import { ConfigProvider, Spin } from 'antd';  
import { app } from "../Firebase/Firebase"
import Login from '../Loginpage/Login';
import CartPage from '../Card2/CartPage';
   function UserConfiram(){ 
    let auth = getAuth(app);
  const[user,setsuse] = useState<any>(null)
  const [loading, setLoading] = useState(true);
   useEffect(()=>{
       onAuthStateChanged(auth, user  =>{
       if(user){
       setsuse(user);
       }
       else{
     setsuse(null);  
       }
       setLoading(false)
         })
        },[])
  if(loading){
    return (
      <div  style={{
        display:"flex",
        justifyContent : 'center',
        alignItems : "center",
        textAlign : "center",
        color  : "green"
      }}>
          <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Spin/>
  </ConfigProvider>
      </div>
    )
  }
 if(user === null){   
  return(
     <div>  
        <Login/>
     </div>
  )
}   
return(
    <div>
        <CartPage/>
    </div>
)
  }
  export default UserConfiram;