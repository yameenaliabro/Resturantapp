import React from 'react';
import imagecard from "./Img/1.jpg"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from 'mdb-react-ui-kit';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addtocart } from '../store/slice';
import { ToastContainer, toast } from 'react-toastify';
export default function Card2() {
    let dispatch = useDispatch()
    let items = useSelector((state : RootState) => state.allcart)
    let data2 = items.items
  return (
    <div className='d-flex justify-content-around flex-wrap-wrap  d-inline-flex'>
        {data2.map((item) =>{
            return(
             <MDBContainer className='mt-5'>
             <MDBRow className='mb-3'>
                 <MDBCol size="md">
         <MDBCard >
       <MDBCardImage src={item.img}position='top' alt='...' />
       <MDBCardBody>
         <MDBCardTitle>Card title</MDBCardTitle>
         <MDBCardText>
          {item.title}
         </MDBCardText>
         <MDBCardText>
            <strong>RS:{item.price}</strong>
         </MDBCardText>
         <MDBBtn onClick={()=>{
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
         }}>AddToCart</MDBBtn>
         <ToastContainer/>
       </MDBCardBody>
     </MDBCard>
     </MDBCol>
     </MDBRow>
     </MDBContainer>
            )
        })}
    </div>
  );
}