import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products"; // Import your products reducer

import { createWrapper, MakeStore } from "next-redux-wrapper";
import gridItems from "./gridItems";
import user from "./user";
import cart from "./cart";


// Create your store
const makeStore = () =>
  configureStore({
    reducer: {
      products: productsReducer,
      gridItems,
      user,
      cart
    },
  });

// Export types for RootState and AppDispatch
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];

// Export the store and wrapper
export const store = makeStore();
export const wrapper = createWrapper(makeStore);
