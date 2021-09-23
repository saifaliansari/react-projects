import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed:false
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => {
                return item.id === newItem.id
            })
            state.totalQuantity++;
            state.changed =true;
            if (!existingItem) {
                state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const removeItemId = action.payload;
            state.totalQuantity--;
            state.changed =true;
            const existingItem = state.items.find(item => {
                return item.id === removeItemId
            })
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== removeItemId)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }

    }
})






export const cartAction = cartSlice.actions;
export default cartSlice;