import React from "react";
import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <ul className="product-tab-title nav nav-tabs">
      <NavBarItem itemClass="active" itemHref="#all" itemName="ALL" />
      <NavBarItem itemHref="#smartphones" itemName="SMARTPHONES" />
      <NavBarItem itemHref="#camera" itemName="CAMERA" />
      <NavBarItem itemHref="#gadgets" itemName="GADGETS" />
      <NavBarItem itemHref="#others" itemName="OTHERS" />
    </ul>
  );
}

export default NavBar;
