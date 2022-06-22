import React, { useState } from "react";
import Logo from "../svgs/Logo";

import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../styled/Button/Button.styled";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <Logo />
      </nav>

      <section className="headerContent">
        <article>
          <h1>Describe the value of booking an appointment</h1>
          <p>
          No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.
          </p>
          <StyledButton>Get Started For Free</StyledButton>
        </article>
       
      </section>
    </StyledHeader>
  );
}

export default Header;
