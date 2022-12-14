import { useState } from "react"
 

export default function Counter(props){

    // expecting initial state value
    const countState = useState(0);
    //returns array [initial/current value, function to update state]

    //count is value, setCount is function
    //let count = countState[0] //(initial value, 0), 0 index of array
    //let setCount = countState[1] //function, 1st index of array

    // can also do this array destructure
    let [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    //anonymous function alterntive
    //<button onClick={() => setCount(count + 1)}>+</button>


    return(
        <>
            <span>Current Count: {count}</span>
            <section>
                <input type="text" /><br />
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </section>
        </>
    )
 }
