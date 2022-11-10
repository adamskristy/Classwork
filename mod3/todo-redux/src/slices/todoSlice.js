import { createSlice } from "@reduxjs/toolkit";

//1 define initial state
const initialState = {
    todos: []
}
//2 reducer function, two arguements current state and action what happens to state
//object as arguement
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //give different methods
        //similar to case in switch statement
        
        addTodo: (state, action) => {
            //console.log(state, action);
            //perform state change
            //with toolkit comes a library caller mimer 
                //allows us to make state changes in simplier way
                //mimer takes care of the mutation, dont need to make new array
            state.todos.push(action.payload)
        },
        clearTodos: (state, action) => {
            //set state to empty
            state.todos = []
        },completeTodos: (state, action) => {
            
        }, deleteTodos: (state, action) => {   //action.payload is todo.id
            const arr = state.todos.filter((e) => e.id !== action.payload)
            //check each element and if id dont match return it
            state.todos = arr
            //return {todos: arr}, same as top
        }
    }
})

//named export (do as many as needed)
export const { addTodo, clearTodos } = todoSlice.actions

console.log(todoSlice.actions)
//console.log(todoSlice.reducer)

//named export (do only once)
export default todoSlice.reducer
/*
    will pass this function to store (todosReducer)
    reducer is not same as reducers
        comes with slice when created
    can rename export whatever we want
*/