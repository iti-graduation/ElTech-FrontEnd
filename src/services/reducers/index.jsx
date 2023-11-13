import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../actions/languageSlice";
import themeSlice from "../actions/themeSlice";
import userSlice from '../actions/userSlice';

const store = configureStore({
    reducer: {
        languageSlice,
        themeSlice,
        userSlice
    },
});

export default store;