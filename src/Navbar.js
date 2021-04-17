import React from "react";
import logo from "./logo1.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div
          className="logo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={logo} alt="logo" style={{ height: "100px" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
