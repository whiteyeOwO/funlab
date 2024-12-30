import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";  
import Home from "./pages/index/Index";
import About from "./pages/About/About";
import DIY from "./pages/DIY/DIY";
import Ingred from "./pages/ingred/Ingred";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Search/Order";
import Search from "./pages/Search/Search";
import Store from "./pages/Store/Store";
import Footer from "./component/Footer";
import './styles/App.scss';

export default function App() {

  return (
    <>
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/diy" element={< DIY />}></Route>
        <Route path="/ingred" element={<Ingred />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>

      </div>
    </>
  )
}

