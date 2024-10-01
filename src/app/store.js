import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/product/productsSlice"
import cartReducer from "../features/cart/cartSlice"

const store = configureStore ({
    reducer : {
        product: productsReducer,
        cart : cartReducer
    }
})

export default store