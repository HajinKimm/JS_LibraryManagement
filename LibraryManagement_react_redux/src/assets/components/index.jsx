import { configureStore } from "@reduxjs/toolkit";
import addForm from "./addbook/addFormSlice";

export const store = configureStore({
    reducer:{
        addForm
    }
})