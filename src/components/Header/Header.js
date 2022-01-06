import React from "react";
import logo from "../../assets/images/lobstermarketing.png";

function Header() {
  return (
    <div>
      <h2 className="logo">
        <img style={{ width: "170px" }} src={logo} alt="" />
      </h2>
      <div>
        <h1 className="sublogo">LOBSTER MARKETING DEV TEST</h1>
        <div>
          <h2>This is body content specifically an H2</h2>
          <p>
            Field service software that keeps it simple. Field Routes helps
            field service companies simplify, scale, and grow.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;
