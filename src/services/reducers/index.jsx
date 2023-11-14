import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../actions/languageSlice";
import themeSlice from "../actions/themeSlice";
import authSlice from '../actions/authSlice';

const store = configureStore({
    reducer: {
        languageSlice,
        themeSlice,
        authSlice
    },
});

export default store;