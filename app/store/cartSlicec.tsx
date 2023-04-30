import { createSelector, createSlice } from '@reduxjs/toolkit'
import { product } from '../data/produect'

const initialState = {
    item: [],
    deliveryFree: 15,
    freeDeliveryFrom: 200,

}
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product
            const cartitem = state.item.find(
                (item) => item.product.id === newProduct.id
            )
            if (cartitem) {
                cartitem.quantity += 1
            } else {
                state.item.push({ product: newProduct, quantity: 1 })
            }
        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload
            const cartItem = state.item.find(item => item.product.id === productId)
            console.log("cartItem", cartItem);

            if (cartItem) {
                cartItem.quantity += amount
            }
            if (cartItem.quantity < 0) {
                state.item = state.item.filter((item) => item !== cartItem)
            }
        },

    }

})
export const selectNumberOfItem = (state) => state.cart.item.length
export const selecctSubtotal = (state) => state.cart.item.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,0
)
const cartSelector = (state)=>state.cart
export const selectDeliveryPrice = createSelector(
    selecctSubtotal,
    cartSelector,
    (subtotal,cart)=>  subtotal > cart.freeDeliveryFrom ? cart.deliveryFree:0
)
export const selectTotal = createSelector(
    selecctSubtotal,
    selectDeliveryPrice,
    (subtotal,delivery) => subtotal+delivery
)