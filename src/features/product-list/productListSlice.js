import {createSlice,} from "@reduxjs/toolkit";
 const initialState = {
    value:0,
    status:"idle"
 }
 const productListSlice = createSlice({
    name:'productList',
    initialState,
    reducers:{
        increment:state =>{
            state.value += 1;
        },
        decrement:state =>{
            state.value -= 1;
        }
    }
 })

 export default productListSlice.reducer;
 export const { increment,decrement } = productListSlice.actions;
