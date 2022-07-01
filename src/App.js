import React from "react";
import { Routes, Route } from "react-router-dom"; //BrowserRouter = container of Route (url)
import { useState } from "react";

//Designs
import SideMenu, { menuItems } from "./components/SideMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Pages
import Home from "./pages/Home";
import { Stock } from "./pages/Stock";
import Stock_New from "./pages/Stock_New";
import Dispatch from "./pages/Dispatch";
import Dispatch_New from "./pages/Dispatch_New";
import { Purchase } from "./pages/Purchase";
import Purchase_New from "./pages/Purchase_New";
import AddDatabase from "./pages/AddDatabase";
import Add_User from "./pages/Add_User";
import Add_Product from "./pages/Add_Product";
import Add_Location from "./pages/Add_Location";
import Add_Project from "./pages/Add_Project";
import Add_Supplier from "./pages/Add_Supplier";
import Add_Cost from "./pages/Add_Cost";

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
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/stock/Stock_New" element={<Stock_New />} />
          <Route path="/dispatch" element={<Dispatch />} />
          <Route path="/dispatch/Dispatch_New" element={<Dispatch_New />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchase/Purchase_New" element={<Purchase_New />} />
          <Route path="/addDatabase" element={<AddDatabase />} />
          <Route path="/addDatabase/Add_User" element={<Add_User />} />
          <Route path="/addDatabase/Add_Product" element={<Add_Product />} />
          <Route path="/addDatabase/Add_Location" element={<Add_Location />} />
          <Route path="/addDatabase/Add_Project" element={<Add_Project />} />
          <Route path="/addDatabase/Add_Supplier" element={<Add_Supplier />} />
          <Route path="/addDatabase/Add_Cost" element={<Add_Cost />} />
          {/* <Route path="/edit/:id" element={<CreateUser />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
