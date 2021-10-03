import * as React from "react";
type LeftSideBarProps = {
  links: { name: string; id: string }[];
};

const LeftSideBar = ({ links }: LeftSideBarProps): JSX.Element => {
  return (
    <nav className="nav-main">
      {links.map((link) => (
        <a className="hover-underline" href={`#${link.id}`} key={link.id}>
          {link.name}
        </a>
      ))}
    </nav>
  );
};
export default LeftSideBar;
