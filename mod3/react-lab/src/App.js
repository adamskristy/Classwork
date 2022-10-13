import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeePage from './components/EmployeePage';
import HomePage from './components/HomePage';


function App () {
  return (
    <div className="App">
      <Routes>
        <HomePage />
        <Route path='/employeepage/:id' element={<EmployeePage />} />
       </Routes>
    </div>
  );
}

export default App;
