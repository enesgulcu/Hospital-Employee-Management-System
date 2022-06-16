import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/login/userSlice';
import securityReducer from '../redux/login/securitySlice';
import myUserReducer from '../redux/login/myUserSlice';
export const store = configureStore({
    reducer:{
        user:userReducer,
        security:securityReducer,
        myUser:myUserReducer,
    },
});
    