import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Product {
  icon: string;
  title: string;
  description: string;
}

interface ProductsState {
  value: Product[];
}

const initialState: ProductsState = {
  value: [
    {
      icon: "/icons/icon-1.png",
      title: "Fresh Produce",
      description: "Locally sourced, organic fruits and vegetables",
    },
    {
      icon: "/icons/icon-2.png",
      title: "Fast Delivery",
      description: "Quick and reliable doorstep delivery services",
    },
    {
      icon: "/icons/icon-3.png",
      title: "Special Discounts",
      description: "Exclusive deals and discounts on a wide range of products",
    },
    {
      icon: "/icons/icon-4.png",
      title: "Quality Assurance",
      description: "Guaranteed quality products from trusted suppliers",
    },
    {
      icon: "/icons/icon-5.png",
      title: "Customer Support",
      description: "24/7 customer support to assist you with any queries",
    },
  ],
};

const gridItems = createSlice({
  name: "gridItems",
  initialState,
  reducers: {},
});

export default gridItems.reducer;
