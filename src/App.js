import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import LoginSignup from "./Pages/LoginSignup";
import AddProduct from "./Components/AddProduct/AddProduct";
import ListProduct from "./Components/ListProduct/ListProduct";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/addproduct" element={<AddProduct />} /> 
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
