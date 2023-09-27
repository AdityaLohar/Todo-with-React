import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (categorySent) => {
    if(categorySent === "All") {
        setMenuData(menuData);
        return;
    }

    const updatedList = Menu.filter((currElem) => {
      return currElem.category === categorySent;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem = {filterItem} menuList = {menuList} />
      <MenuCard menuDataSending={menuData} />
    </>
  );
};

export default Restaurant;
