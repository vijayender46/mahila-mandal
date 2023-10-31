import { configureStore } from "@reduxjs/toolkit";
import likesAndCommentsReducer from '../redux/features/likesAndCommentsSlice';

export const store = configureStore({
    reducer: {
    likesAndComments: likesAndCommentsReducer,
    }
})