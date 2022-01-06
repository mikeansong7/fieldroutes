import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <div className="footerlink">
        <h5>Michael Ansong</h5>
        <a
          href="https://www.linkedin.com/in/michael-ansong-14bb2b139/"
          target="_blank"
        >
          <AiFillLinkedin className="linkedin" />
        </a>
      </div>
      <div>
        <p className="copyright" style={{ fontSize: "8px" }}>
          Copyright 2021 Lobster Marketing All Rights Reserved | Terms &
          Conditions | Accessibility Statement
        </p>
      </div>
    </div>
  );
}
export default Footer;
