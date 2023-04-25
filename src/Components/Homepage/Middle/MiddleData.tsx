import { Button, Form, Input,InputRef,message,Spin,Typography} from "antd";
import TextArea from "antd/es/input/TextArea";
import { addDoc, collection } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../../Firebasedatabase/Firebase/Firebase";
import { useState } from "react";
import "./Middle.css"
function MiddleData(){ 
const[spin,setspin] = useState<boolean>(false)    
let ref1 = useRef<InputRef>(null)
let ref2 = useRef<InputRef>(null)
let ref3 = useRef<InputRef>(null)
let Submit =()=>{
    setspin(true)
    let name = ref1.current!.input!.value
    let email = ref1.current!.input!.value
    let usermassage = ref1.current!.input!.value
    const docref = addDoc(collection(db,`${name}`),{
        Name :name,
        Email :email,
        Message : usermassage
    }).then(()=>{
setspin(false)
message.success("You are Feedback is Submit Thankyou")
    }).catch(()=>{
        message.error("something went wrong")
    })

}
    const {Title} = Typography;
return(

    <div className="container">
        <Spin spinning={spin}>
        <Title level={2} style={{
            marginBottom:50,
            color: "#fff"
        
        }}>Enter A FeedBack</Title>
        <Form style={{
            maxWidth:400 ,
            backgroundColor:"rgb(42, 165, 159)",
            padding:20,
            marginBottom :100,
        }}>
            <Form.Item
            style={{
                color : "white"
            }}>
                <label color="white"> Name</label>
                <Input type="text" placeholder="Name" ref={ref1}/>
            </Form.Item>
            <Form.Item
             style={{
                color : "white"
            }}>
                <label>Eneter a email Adress</label>
                <Input type="email" placeholder="Enter email Adress" ref={ref2}/>
            </Form.Item> 
            <Form.Item
             style={{
                color : "white"
            }}>
                <label>Message</label>
                <TextArea placeholder="Message" rows={5} maxLength={60} ref={ref3}></TextArea>
            </Form.Item>
            <Form.Item>
               <Button type="primary" block onClick={Submit}>SubmitNow</Button>
            </Form.Item>
        </Form>
        </Spin>
    </div>
)
}
export default MiddleData;