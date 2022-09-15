import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { BsInfoSquare, BsChatLeftDots } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

import { Link, NavWrapper } from "./styles";

const links = [
  {
    href: "#",
    icon: <BiHome />,
  },
  {
    href: "#about",
    icon: <BsInfoSquare />,
  },
  {
    href: "#experience",
    icon: <SiBookstack />,
  },
  {
    href: "#services",
    icon: <MdOutlineDesignServices />,
  },
  {
    href: "#contact",
    icon: <BsChatLeftDots />,
  },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <NavWrapper>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          onClick={() => setActiveNav(link.href)}
          className={activeNav === link.href ? "active" : ""}
        >
          {link.icon}
        </Link>
      ))}
    </NavWrapper>
  );
};

export default Nav;
