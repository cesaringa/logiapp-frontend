import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo44.jpg";
import user from "../assets/user.jpg";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/home",
    iconClassName: "bi-house-door-fill",
  },
  {
    name: "Stock",
    exact: true,
    to: `/stock`,
    iconClassName: "bi-shop-window",
    subMenus: [{ name: "New item to Stock", to: "/stock/stock_new" }],
  },
  {
    name: "Dispatch",
    exact: true,
    to: `/dispatch`,
    iconClassName: "bi-truck",
    subMenus: [{ name: "New dispatch Order", to: "/dispatch/dispatch_new" }],
  },
  {
    name: "Purchase",
    exact: true,
    to: `/purchase`,
    iconClassName: "bi-cart-check-fill",
    subMenus: [{ name: "New purchase Order", to: "/purchase/purchase_new" }],
  },
  {
    name: "Add to Database",
    exact: true,
    to: `/addDatabase`,
    iconClassName: "bi-node-plus-fill",
    subMenus: [
      { name: "New User", to: "/addDatabase/add_user" },
      { name: "New Product", to: "/addDatabase/add_product" },
      { name: "New Location", to: "/addDatabase/add_location" },
      { name: "New Project", to: "/addDatabase/add_project" },
      { name: "New Supplier", to: "/addDatabase/add_supplier" },
      { name: "New Unit Cost", to: "/addDatabase/add_cost" },
    ],
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="logiapp-logo" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      {/* <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div> */}

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Cesar Inga</h5>
          <p>cesar.ing23@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
