// products.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceProductsPayload {
  start: number;
  end: number;
}

interface Product {
  name: string;
  image: string;
}

interface ProductsState {
  value: Product[];
}

const initialState: ProductsState = {
  value: [
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
    {
      name: "Dairy, Bread & Eggs",
      image: "/categories/dairyandeggs.avif",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sliceProducts: (state: ProductsState, action: PayloadAction<SliceProductsPayload>) => {
      const { start, end } = action.payload;
      const endIndex = Math.min(state.value.length, end);
      state.value = state.value.slice(Math.max(0, start), endIndex);
    },
  },
});

export const { sliceProducts } = productSlice.actions;
export default productSlice.reducer;
