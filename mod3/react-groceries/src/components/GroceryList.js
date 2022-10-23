import  data  from "./data";
import { useState } from 'react';
import GroceryItem from "./GroceryItem";

function GroceryList() {
    
   
    let [grocery, setGroceries] = useState([])
   
   

    return ( 
        <div>
            
            {data.map((data, i) => {
                return(
                    <GroceryItem key={i} grocery={data} />
                )
            })}
        </div>
     );
}

export default GroceryList;