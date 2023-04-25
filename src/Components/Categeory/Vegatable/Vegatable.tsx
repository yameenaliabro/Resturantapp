import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "./vg.css"
import { Button, Card, Image, Rate } from 'antd';
import { useState } from 'react';
import Footer from "../../Homepage/Footer/Footer"
import Vgdata from './vgdata/vgdata';
export default function VegatableCategeory() {
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const [value, setValue] = useState<number>(3);
  return (
    <div>
      <div className='set-heading'>
      <h2>Vegatable</h2>
      </div>
    <div className='containe'>
   {Vgdata.map((item)=>{
    return(
      <div>
        <Card style={{
          marginTop:50,
          width:340
        }}>
          <Image src={item.img} style={{
            height:200,
            width:290
          }}/>
          <p>{item.title}</p>
          <strong>Rs-{item.price}</strong>
          <p>{item.quantity}</p>
          <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span><br/><br/>
          <Button  type="primary" onClick={()=>{
           toast('Product Added to Cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
         }}>AddToCart</Button>
         <ToastContainer/>
        </Card>
      </div>
    )
   })}
    </div>
    <div className='set-footer'>
    <Footer/>
    </div>
    </div>
  
  );
}