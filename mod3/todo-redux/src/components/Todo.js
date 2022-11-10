import { current } from "@reduxjs/toolkit";
import { useState } from "react";

function Todo({ todo }) {
//passing todo props down


    const handleClick = () => {
        // complete a todo and remove it
        //dispatch(completeTodos)
    }

    return ( 
        <li onClick={handleClick}>
            {todo.notes}
        </li>
     );
}

export default Todo;