import { Link } from 'react-router-dom';
import Data from './Data'

function EmployeeListItem(){
    return(
        <ul>
            {Data.map((Data)=>{
                return (
                <Link key={Data.index} to={`/employeepage/${Data.index}`}>
                    <li key={Data.index}>
                        <h3>{Data.name}</h3>
                        <span>{Data.title}</span>
                    </li>
                </Link>
                )
            })}
        </ul>
    )
}

export default EmployeeListItem;