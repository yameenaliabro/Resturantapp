// @ts-nocheck 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productdata from "../product/product";   
const initialState = {
items : productdata,
cart:[],
totalquantity : 0,
totalprice : 0 
}          
export const cartslice = createSlice({
    name : "cartdata",
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            let find = state.cart.findIndex((item)=> item.id== action.payload.id)
            if(find >=0){
                state.cart[find].quantity +=1
            }
            else{
                state.cart.push(action.payload)
            }
        },
        TotalAmount : (state)=>{
            let {totalquantity,totalprice} = state.cart.reduce(
                (carttotal,cartitem) =>{
  console.log("carttotal",carttotal)
  console.log("cartitem",cartitem)
  const{price,quantity} = cartitem
  console.log(price,quantity)
  const itemtotal = price * quantity
carttotal.totalprice += itemtotal;
carttotal.totalquantity += quantity
return carttotal 
                },
                {totalprice :0,
                totalquantity :0 }
            );
            state.totalprice = parseInt(totalprice.toFixed(2))
            state.totalquantity  = totalquantity
        },
        removeitem :(state,action)=>{
  state.cart = state.cart.filter((item)=> item.id !== action.payload) 
        },
        increment : (state,action)=>{
state.cart = state.cart.map((item)=>{
    if(item.id ===action.payload ){
    return {...item,quantity : item.quantity + 1 }
    }
    return item
})
        },
        decrement : (state,action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.id ===action.payload ){
                return {...item,quantity : item.quantity - 1 }
                }
                return item
            })
                    }
    }
})
export const {addtocart,TotalAmount,removeitem,increment,decrement}  = cartslice.actions
export default cartslice.reducer