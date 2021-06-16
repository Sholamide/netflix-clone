import React from "react";
import { Header } from "../components";
import { FaFeatherAlt } from "react-icons/fa";
import * as ROUTES from "../constants/routes";
// import logo from "../../public/images/misc/logo.png";
// import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        {/* <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} /> */}
        <FaFeatherAlt />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
