import { configureStore } from "@reduxjs/toolkit";
import checkListItemReducer from "./slices/checkListItemSlice";

const store = configureStore({
  reducer: {
    checkListItems: checkListItemReducer
  }
})

export default store;