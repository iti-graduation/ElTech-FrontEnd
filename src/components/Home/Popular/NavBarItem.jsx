import React from "react";

function NavBarItem({ itemClass, itemHref, itemName }) {
  return (
    <li>
      <a className={itemClass} href={itemHref} data-toggle="tab">
        {itemName}
      </a>
    </li>
  );
}

export default NavBarItem;
