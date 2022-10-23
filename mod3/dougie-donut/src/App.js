import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./componemts/Navbar";
import Borough from "./pages/Borough";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/borough/:borough' element={<Borough />} />
      </Routes>
     
    </div>
  );
}

export default App;
