import React from "react";
import { InputText } from "primereact/inputtext";
import "./header.css";
function Header() {
  return (
    <div className="flex header-cont align-items-center justify-content-evenly min-h-4rem bg-pink-400">
      <h1 className="main-title text-7xl text-white font-medium">
        Horo<span className="text-purple-800">scope</span>
      </h1>
      <span className="input-span p-input-icon-right">
        <i className="pi pi-search text-xl text-purple-600 font-bold" />
        <InputText
          label="Search"
          className="w-full border-3 border-round border-purple-600 shadow-4 text-grey"
          placeholder="Search your destiny here..."
        />
      </span>
    </div>
  );
}

export default Header;
