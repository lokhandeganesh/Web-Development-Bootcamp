import React from "react";

const currYear = new Date().getFullYear()

function Footer() {
  return (
    <footer>
      <p>copyright © {currYear}</p>
    </footer>
  );
}

export default Footer;