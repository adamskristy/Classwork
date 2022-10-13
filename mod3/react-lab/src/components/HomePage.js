import EmployeeList from "./EmployeeList";
import Header from "./Header";
import Search from "./Search";


function HomePage () {
    return ( 
        <div>
            <Header />
            <Search />
            <EmployeeList />
        </div>
     );
}

export default HomePage;