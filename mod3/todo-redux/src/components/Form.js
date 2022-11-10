import { useRef } from "react";
import { v4 as uuid } from 'uuid'

import { useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../slices/todoSlice";


function Form() {

    let notesRef = useRef()
    const dispatch = useDispatch()
    //pass action object with payload

    const handleSubmit = (e) => {
        e.preventDefault()

        let newTodo = {
            notes: notesRef.current.value,
            completed: false,
            id: uuid()
        }

        //addTodo(newTodo) --> no longer need
        //pass payload into dispatch function
            //calling function addTo and passing new as arguement
        dispatch(addTodo(newTodo))
        console.log(newTodo)

        notesRef.current.value = ""
    }

    const handleClick = () => {
       dispatch(clearTodos())
    }

    

    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="notes">I need to...</label>
            <br/>
            <input 
                id="notes" 
                type="text" 
                ref={notesRef} 
            />
            <br/><br/>
            <button>Submit</button>
        </form>
        <button onClick={handleClick}>Clear Todos</button>
        </>
     );
}

export default Form;