import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotal: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);

            if (existingItem) {
                // Increase the quantity of the existing item
                existingItem.quantity += 1;
            } else {
                // Add new item with quantity 1
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }

            
            // state.cartTotal += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                const item = state.cartItems[itemIndex];

                if (item.quantity > 1) {
                    // Decrease quantity if more than 1
                    item.quantity -= 1;
                    state.cartTotal -= action.payload.price;
                } else {
                    // Remove the item if quantity is 1
                    state.cartItems.splice(itemIndex, 1);
                    state.cartTotal -= action.payload.price;
                }
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
