import React, { useState } from "react";
import "./Sidebar.css";
import admin from "../../resources/administrator.png";
import { SidebarData } from "../../Data/Data";

export default function Sidebar() {
  const [select, setSelect] = useState("");
  return (
    <div className="sidebar">
      {/* logo  */}
      <div className="logo">
        <img src={admin} alt="" />
        <span>
          sh
          <span>o</span>
        </span>
        <span>ps</span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={select === index ? "menuItem active" : "menuItem"}
              key={item.id}
              onClick={() => setSelect(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
