import { Button, Form, Input, InputRef, message, Spin } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useRef,useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth,} from "../Firebase/Firebase";
function Signin(){
    const[spin,setspin] = useState<boolean>(false) 
    let ref3 = useRef<InputRef>(null)
    let ref4 = useRef<InputRef>(null)
    let Signin= async()=>{
        setspin(true)
        let email  = ref3.current!.input!.value
        let password  = ref4.current!.input!.value
        signInWithEmailAndPassword(auth,email,password).then(()=>{
           setspin(false)
        }).catch(()=>{
            alert("something went wrong please try again")
        })

    }
    return(
        <div className="container">
          <Spin spinning={spin}>
        <Form style={{
            maxWidth:400 ,
            backgroundColor  :"#efefef",
            padding:20,
            marginBottom :100,
        }}>
            <Form.Item>
                <label>Eneter a email Adress</label>
                <Input type="email" placeholder="Enter email Adress" ref={ref3}/>
            </Form.Item> 
            <Form.Item>
                <label>Email Password </label>
                <Input type="password" placeholder="Email Password" ref={ref4}/>
            </Form.Item>
            <Form.Item>
               <Button type="primary" block onClick={Signin}>Sign Up</Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login"><Button type="link" block style={{
                color : "blue"
               }}>Create a New Account</Button></Link>
            </Form.Item>
        </Form>
        </Spin>
        <Outlet/>
        </div>
    
    )
}
export default Signin