import  ReceiptItems  from "./ReceiptItems";
import  orders  from "./Orders";

function Receipt() {
    return ( 
        <div className="orders">
            {orders.map((orders, i) => {
                return( 
                <ReceiptItems key={i} whichOrder={orders} />
                )
            })}
            
        </div>
     );
}

export default Receipt;