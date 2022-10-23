import { useState } from 'react';


function GroceryItem(props) {

    let [purchased, setPurchased] = useState(true)

    const purchaseItem = () => {
        setPurchased(purchased => !purchased)
    }

    return ( 
        <div className="groceries">
            {purchased && (
                <>
                    <h3>{props.grocery.item}</h3>
                    <ul>
                        <li>{props.grocery.brand}</li>
                        <li>{props.grocery.units}</li>
                        <li>Qty: {props.grocery.quantity}</li>
                    </ul>
                    <button onClick={purchaseItem}>Purchase</button>
                </>
            )}
        </div>
     );
}

export default GroceryItem;