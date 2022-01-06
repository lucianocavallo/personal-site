import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
    </nav>
  );
}

export default Header;