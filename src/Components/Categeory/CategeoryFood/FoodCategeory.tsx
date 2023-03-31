import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { RootState } from '../../Reduxe/store/store';
import { addtocart } from '../../Reduxe/store/slice';
import "./Food.css"
import { Button, Card, Image, Rate } from 'antd';
import { useState } from 'react';
export default function FodCategeory() {
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const [value, setValue] = useState<number>(3);
    let dispatch = useDispatch()
    let items = useSelector((state : RootState) => state.allcart)
    let data2 = items.items
  return (
    <div>
      <div className='set-heading'>
      <h2 >Products</h2>
      </div>
    <div className='containe'>
   {data2.map((item)=>{
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
            dispatch(addtocart(item))
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
    </div>
  
  );
}