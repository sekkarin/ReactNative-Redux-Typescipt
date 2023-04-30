import {createSlice} from '@reduxjs/toolkit'
import { product } from '../data/produect'

const initialState = {
    products:product,
    selectedProduct:null,

}
export const productsSlice = createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
        setSelectedProduct:(state,action)=>{
            const productId =  action.payload
            state.selectedProduct =  state.products.find((p)=>p.id === productId)
            
        }
    }

})