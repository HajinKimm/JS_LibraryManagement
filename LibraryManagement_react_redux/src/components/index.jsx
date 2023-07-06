import { configureStore } from "@reduxjs/toolkit";
import addForm from "./addbook/addFormSlice";
import authority from './login/AuthoritySlice';

export const store = configureStore({
    reducer:{
        addForm,
        authority
    }
})