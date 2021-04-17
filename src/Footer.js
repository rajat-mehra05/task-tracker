import React from "react";
import { Container } from "@material-ui/core";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        padding: "2rem",
        color: "#26001b",
        background: "#8ac4d0",
        fontWeight: "bold",
      }}
    >
      <Container>
        <div>Copyright 2021 &copy; Task tracker</div>
        <span>
          {" "}
          Made by{" "}
          <a href="https://rajat-mehra-portfolio.netlify.app/" target="blank">
            Rajat Mehra{" "}
          </a>{" "}
        </span>
      </Container>
    </div>
  );
};

export default Footer;
