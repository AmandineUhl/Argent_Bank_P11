import { configureStore } from "@reduxjs/toolkit";

import LoginReducer from "./Login/LoginReducer";
import UserReducer from "./User/UserReducer";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    user: UserReducer,
  },
});

export default store;
