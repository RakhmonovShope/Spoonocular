import React, { Fragment } from "react";

const MenuNav = ({ menuSelection }) => {
  function selection(item) {
    menuSelection(item);
  }

  return (
    <Fragment>
      <ul className="menu-list-wrapper">
        <li className="menu-list active" onClick={() => selection("")}>
          <a>Mixed</a>
        </li>
        <li className="menu-list" onClick={() => selection("Steak")}>
          <a>Steak</a>
        </li>
        <li className="menu-list" onClick={() => selection("Vegetarian")}>
          <a>Vegetarian</a>
        </li>
        <li className="menu-list" onClick={() => selection("Meat")}>
          <a>Meat</a>
        </li>
        <li className="menu-list" onClick={() => selection("Beverage")}>
          <a>Beverage</a>
        </li>
        <li className="menu-list" onClick={() => selection("Dessert")}>
          <a>Dessert</a>
        </li>
        <li className="menu-list" onClick={() => selection("Salade")}>
          <a>Salade</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default MenuNav;
