import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./reducer/nameReducer";

const store =configureStore({
    reducer:{
        studentName : nameReducer
    },
})

export default store;