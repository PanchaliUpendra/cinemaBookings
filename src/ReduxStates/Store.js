import { configureStore } from "@reduxjs/toolkit";
import Userdata from "./Usersdata";

export const Store = configureStore({
    reducer:{
        userdata:Userdata
    },
});