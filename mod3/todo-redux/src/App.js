import Todos from "./components/Todos";
import Form from "./components/Form";
import { useState } from "react";

import { store } from "./store";
import { Provider } from "react-redux";

/*
How to install:

npm install @reduxjs/toolkit react-redux

Setup:
1. Configure global state(store) 
2. provide it to our components
3. Create a slice that represents a piece/slice of the state and how to manage it (similar to reducer)


How to Use:
1. Use special hook alled useSelector (from react-redux) that can grab a piece
of the redux store (global state)
2. We can use another hook called useDispatch (from react-redux) that can help us
manipulate the redux store (we'll use those exported actions with it)

*/



function App() {
  //no longer need becausein global state
    //let [todos, setTodos] = useState([])

  
    const addTodo = (newTodo) => {
        //setTodos([...todos, newTodo])
    }

    return ( 
        <Provider store={store}>
          {/* special prop called store where we pass down store */}

            <Todos  />

            <Form addTodo={addTodo} />

        </Provider>
    );
}

export default App;