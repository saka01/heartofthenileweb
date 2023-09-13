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
    <header className="bg-[#CE2829] sticky-top shadow-md">
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
          } absolute md:hidden px-24 bg-[#CE2829] w-full pb-20`}
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
    // <>

    //     <div className="header">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-xl-12">
    //                     <div className="navigation">
    //                         <nav className="navbar navbar-expand-lg navbar-light">
    //                             <div className="brand-logo">
    //                                 <Link href="/"><a>
    //                                     <img src="/images/logo.png" alt="" className="logo-primary" />
    //                                 </a></Link>
    //                             </div>
    //                             {/* <div className="search">
    //                                 <form>
    //                                     <span><i className="ri-search-line"></i></span>
    //                                     <input type="text" placeholder="Search Here" />
    //                                 </form>
    //                             </div> */}
    //                             <button className="navbar-toggler" type="button" onClick={toggleTrueFalse}>
    //                                 <span className="navbar-toggler-icon"></span>
    //                             </button>
    //                             <div className={isToggled ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
    //                                 <ul className="navbar-nav ms-auto">

    //                                     <li className="nav-item dropdown">
    //                                         <Link href="/"><a className="nav-link">Home
    //                                         </a>
    //                                         </Link>
    //                                     </li>
    //                                     <Link href="/cart" passHref>
    //                                         <a className="mx-20"><CartCounter /></a>
    //                                     </Link>

    //                                 </ul>
    //                             </div>

    //                             <div className="signin-btn">
    //                                 <a className="btn btn-primary" onClick={logoutHandler}>Sign out</a>
    //                             </div>
    //                         </nav>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // </>
  );
}
export default Header;
