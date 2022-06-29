import React from "react";
import { Routes, Route } from "react-router-dom"; //BrowserRouter = container of Route (url)
import { useState } from "react";

//Designs
import SideMenu, { menuItems } from "./components/SideMenu";
// import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Pages
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import { Stock } from "./pages/Stock";
import { Purchase } from "./pages/Purchase";

// import CreateProduct from "./pages/CreateProduct";
// import CreateUser from "./pages/CreateUser";
// import UsersList from "./pages/UsersList";

// import Navbar from "./features/NavBar";

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      {/* <Sidebar/> */}
      {/* <Navbar /> */}
      {/* <Navigation /> */}
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Routes>
          {/* <Route path="/home" exact component={Home} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/stock/stockList" element={<Stock />} />
          <Route path="/purchase" element={<Purchase />} />
          {/* <Route path="/users" element={<CreateUser />} />
        <Route path="/edit/:id" element={<CreateUser />} />
        <Route path="/product" element={<CreateProduct />} />
        <Route path="/" element={<UsersList />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
