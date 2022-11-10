import { useSelector } from "react-redux";
//allow you to extract data from store state using selector function
import Todo from "./Todo";

function Todos() {

    // const todos = useSelector((state) => state.todos.todos)
    const {todos} = useSelector((state) => state.todos)

        //console.log(state.todos.todos)
    
    return ( 
        <div>
            <h3>Todos:</h3>

            <ul>

                {todos.map((todo, i) => 
                    <Todo key={i} todo={todo} />
                )}
            </ul>
        </div>
    );
}

export default Todos;