import React from "react";
import NavLink from "./NavLink";

interface props {
  link: string;
  name: String;
}

const MenuItem: React.FC<props> = ({ link, name }) => {
  return (
    <NavLink
      // className={({ isActive }) =>
      //   isActive ? "link-active text-white" : "normal-header link-underline"
      // }
      className="text-white hover:text-grey-darker"
      href={link}
    >
      {name}
    </NavLink>
  );
};

export default MenuItem;