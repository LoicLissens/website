import * as React from "react";
import TopBar from "../components/TopBar";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar"
type LayoutProps = {
  title: string;
  children: JSX.Element;
};
const Layout = ({ title, children }: LayoutProps): JSX.Element => {
  const links:{ name: string,id:string }[]  = [{ name: "Présentation",id:"intro" },{ name: "Portfolio",id:"portfolio" },{ name: "Contact",id:"contact" },];
  return (
    <div className="">
      <header>
          <title>{title}</title>
          <TopBar />
        </header>
        <main>
          <aside> <LeftSideBar links={links} /></aside>
          <RightSideBar/>
          {children}
        </main>
    </div>
  );
};
export default Layout;
