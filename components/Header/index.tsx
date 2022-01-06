import React from "react";
import Link from "next/link";

import { Nav } from "./styles";

const Header = () => {
  return (
    <Nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
    </Nav>
  );
}

export default Header;