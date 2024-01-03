import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header>
      <Link href="/">
        Click Me
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert"
        />
      </Link>

      <div className="flex space-x-2">
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
