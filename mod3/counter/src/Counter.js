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
    let [number, setNumber] = useState("")

    const handleIncrement = () => {
        setCount(Number(number) + count)
    }

    const handleDecrement = () => {
        setCount(Number(number) - count)
    }

    const handleSquaring = () => {
        setCount(Number(number) * count)
    }

    const handleDividing = () => {
        setCount(Number(number) / count)
    }

    //anonymous function alterntive
    //<button onClick={() => setCount(count + 1)}>+</button>

    const handleChange = (e) => {
        console.log('number');
        setNumber(e.target.value)
    }

    return(
        <>
            <span>Current Count: {count}</span>
            <section>
                <input type="text" value={number} onChange={handleChange} /><br />
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleSquaring}>*</button>
                <button onClick={handleDividing}>/</button>
            </section>
        </>
    )
 }
