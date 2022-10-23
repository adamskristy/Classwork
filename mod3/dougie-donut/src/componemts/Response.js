import { useState } from "react";

function Response ({ res }) {

    let [toggle, setToggle] = useState(false)

    let resolution = (
        <div>
            
        </div>
    )

    return ( 
        <div key={res.unique_key}> 
            <div>{res.descriptor}</div>
           <button onClick={() => setToggle(!toggle)}>Responses</button>
           {toggle ? 
            <div>
                <span>{res.resolution_description} </span>
                <span> {res.status}</span>
            </div>
            : 
            null 
        }
        </div>
     );
}

export default Response ;