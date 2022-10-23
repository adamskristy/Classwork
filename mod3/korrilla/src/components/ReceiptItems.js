function ReceiptItems(props) {


    return ( 
        <div className="receipts">
            <h2>{props.whichOrder.person}</h2>
            <h3>Main: {props.whichOrder.order.main} </h3>
            <h3>Protein: {props.whichOrder.order.protein} </h3>
            <h3>Rice: {props.whichOrder.order.rice}  </h3>
            <h3>Sauce: {props.whichOrder.order.sauce}  </h3>
            <h3>Drink: {props.whichOrder.order.drink} </h3>
            <h3>Cost: ${props.whichOrder.order.cost}  </h3>
            <button>Paid</button>

        </div>
     );
}

export default ReceiptItems;