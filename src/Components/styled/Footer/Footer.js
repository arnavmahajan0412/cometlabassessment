import React from "react";
import { StyledFooter } from "./Footer.styled";
import Logo from "../../svgs/Logo";


function Footer() {
  return (
    <StyledFooter>
      <Logo fill="currentColor" />
      <small>
        <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </small>
    </StyledFooter>
  );
}

export default Footer;
