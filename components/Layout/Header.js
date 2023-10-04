import Link from "next/link";
import Image from "next/image";
import { Nav } from "./Nav";
import { Logo } from "../Logo";
import { navLinks } from "/utils";
import { useState } from "react";
// import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
// const ThemeSwitch = dynamic(() => import('../elements/ThemeSwitch'), {
//     ssr: false
// })
function Header({ signoutHandler, role, page }) {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  return (
    <header className="bg-white sticky-top shadow-md">
      <div className="relative">
        <Nav.TopBar />
        <nav
          className={`px-24 navbar navbar-expand-lg flex items-center justify-between`}
        >
          <Logo />
          <div className="flex items-center">
            <Nav.ToggleBtn handleClick={toggleTrueFalse} />
            <div className={`hidden md:inline-block`}>
              {navLinks.map((item) => {
                return (
                  <Nav.Item
                    key={item.id}
                    active={page}
                    title={item.title}
                    url={item.url}
                  />
                );
              })}
              <Nav.Btn label={"Order Now"} url={"/menu"} />
            </div>
          </div>
        </nav>
        <div
          className={`${
            isToggled ? "flex flex-col" : "hidden"
          } absolute md:hidden px-24 bg-white w-full pb-20`}
        >
          {navLinks.map((item) => {
            return (
              <Nav.MobileItem
                key={item.id}
                active={page}
                title={item.title}
                url={item.url}
              />
            );
          })}
          <Nav.MobileBtn label={"Order Now"} url={"/menu"} />
        </div>
      </div>
    </header>
  );
}
export default Header;
