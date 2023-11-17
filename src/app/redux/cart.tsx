// cart.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [
    {
      id: 1,
      name: "Product 1",
      price: 10.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.0,
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity });
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCartItemQuantity: (
      state: CartState,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
        state.items = state.items.filter((item) => item.quantity > -1);
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
