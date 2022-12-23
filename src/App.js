import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu"

// import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;