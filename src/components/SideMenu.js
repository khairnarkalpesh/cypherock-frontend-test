import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "Portfolio",
    exact: true,
    to: "/coinlist",
    iconClassName: "fa-solid fa-bars-progress",
  },
  {
    name: "Wallets",
    exact: true,
    to: `/coinlist`,
    iconClassName: "fa-solid fa-wallet",
    subMenus: [
      { name: "Wallet 1", to: "/coinlist" },
      { name: "Wallet 2", to: "/coinlist" },
      { name: "Wallet 3", to: "/coinlist" },
    ],
  },
  {
    name: "Last transaction",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  { name: "Tutorials", to: `/`, iconClassName: "bi bi-vector-pen" },
  { name: "Setting", to: `/`, iconClassName: "fa-solid fa-gear" }
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
        </ul>
      </div>

      <div className="side-menu-footer">
        <a href="">Support</a>
      </div>
    </div>
  );
};

export default SideMenu;
