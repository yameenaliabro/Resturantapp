import { Button, Form, Input, InputRef, message, Spin } from "antd";
import { Link, Outlet, useParams } from "react-router-dom";
import "./Login.css"
import { useRef,useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebasedatabase/Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import View from "../../ViewItem/View";
function Login(){
    const[spin,setspin] = useState<boolean>(false) 
    let ref1 = useRef<InputRef>(null)
    let ref2 = useRef<InputRef>(null)
    let ref3 = useRef<InputRef>(null)
    let ref4 = useRef<InputRef>(null)
    let Signin = async()=>{
        setspin(true)
        let Name  = ref1.current!.input!.value
        let Number  = ref2.current!.input!.value
        let email  = ref3.current!.input!.value
        let password  = ref4.current!.input!.value
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
           setspin(false)
        }).catch(()=>{
            alert("something went wrong please try again")
        })
        try{
        const docRef = await addDoc(collection(db, `${Name}`), {
            Name: Name,
            Number: Number,
          });
          message.success("your sucessfull login")
          setspin(false)
        }catch (e) {
          message.error("Some thing went wrong")
          
        }
    }
    return(
        <div>
        <div className="container">
          <Spin spinning={spin}>
        <Form style={{
            maxWidth:400 ,
            backgroundColor  :"#efefef",
            padding:20,
            marginBottom :100,
        }}
        >
           <Form.Item>
                <label >Name</label>
                <Input placeholder="Enter FullName" ref={ref1} maxLength={11} />
            </Form.Item>
            <Form.Item>
                <label >Number</label>
                <Input placeholder="Enter Number" ref={ref2} maxLength={11} />
            </Form.Item>
            <Form.Item>
                <label>Eneter a email Adress</label>
                <Input type="email" placeholder="Enter email Adress" ref={ref3}/>
            </Form.Item> 
            <Form.Item>
                <label>Email Password </label>
                <Input type="password" placeholder="Email Password" ref={ref4}/>
            </Form.Item>
            <Form.Item>
               <Button type="primary"   block onClick={Signin}>Sign Up</Button>
            </Form.Item>
            <Form.Item>
              <Link to="/signin"><Button type="link" block style={{
                color : "blue"
               }}>Already ?Account Create in Sign in</Button></Link>
            </Form.Item>  
        </Form>
        </Spin>
        </div>
        <Outlet/>
        </div>
    )
}
export default Login