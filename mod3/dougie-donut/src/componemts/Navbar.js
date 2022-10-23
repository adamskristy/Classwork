import { Link } from "react-router-dom";

function Navbar () {
    return ( 
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Bronx'>Bronx</Link></li>
                <li><Link to='/borough'>Staten Island</Link></li>
                <li><Link to='/borough'>Queens</Link></li>
                <li><Link to='/borough'>Manhattan</Link></li>
                <li><Link to='/borough'>Brooklyn</Link></li>
            </ul>
        </div>
     );
}

export default Navbar;