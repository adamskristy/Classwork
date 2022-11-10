import { configureStore } from "@reduxjs/toolkit";
import  todosReducer  from "./slices/todoSlice";

/*
    create our store (global state) with function that takes object
        dont have to lift state to App
        all components/children will have access to global state
*/
export const store = configureStore({
    //this is "state"
        //property called reducer
    reducer: { 
    //property: function as value
        todos: todosReducer
    }
})