import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../actions/languageSlice"
import themeSlice from "../actions/themeSlice"

export default configureStore({
    reducer: {
        languageSlice,
        themeSlice
    },
});