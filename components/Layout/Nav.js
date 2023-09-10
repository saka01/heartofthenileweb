import Link from "next/link";
import theme from "/public/styles/theme";

export const Nav = {
  Item: ({ active, title, url }) => {
    return (
      <Link href={`${url}`}>
        <span
          className={`text-white capitalize ${
            active === title ? "font-semibold" : ""
          } cursor-pointer text-xl ml-5 hover:font-semibold `}
        >
          {title}
        </span>
      </Link>
    );
  },
  ToggleBtn: ({ handleClick }) => {
    return (
      <button
        onClick={handleClick}
        className={`md:hidden text-5xl text-gray-200 hover:text-white`}
      >
        <i className="bi bi-list"></i>
      </button>
    );
  },
  Btn: ({ label }) => {
    return (
      <Link href={"#"}>
        <span className="ml-5 w-44  bg-white py-12 text-xl px-10 rounded-2xl shadow text-gray-900 hover:text-[#CE2829] cursor-pointer capitalize font-semibold">
          {label} <i className="bi bi-cart-fill"></i>
        </span>
      </Link>
    );
  },
  MobileItem: ({ active, title, url }) => {
    return (
      <Link href={`${url}`}>
        <span
          className={`text-white ${
            active === title ? "font-semibold" : ""
          } cursor-pointer capitalize text-xl mb-10 hover:font-semibold`}
        >
          {title}
        </span>
      </Link>
    );
  },
  MobileBtn: ({ label }) => {
    return (
      <Link href={"#"}>
        <span className="w-40 text-center text-xl bg-white py-12 px-10 rounded-2xl shadow text-gray-900 hover:text-[#CE2829] cursor-pointer font-semibold capitalize">
          {label} <i className="bi bi-cart-fill"></i>
        </span>
      </Link>
    );
  },
  TopBar: () => {
    return (
      <div className="w-full flex flex-col md:flex-row items-end md:items-center md:justify-end px-24 pt-4">
        <a
          href="#"
          className="flex items-center text-gray-100 text-sm hover:font-semibold hover:text-white"
        >
          <i className="bi bi-geo-alt-fill"></i>
          <span className="ml-1 tracking-wide">
            The W.E.A.N. Community Center. London, Ontario
          </span>
        </a>
        <a
          href="tel:#"
          className="ml-5 flex items-center text-gray-100 text-sm hover:font-semibold hover:text-white"
        >
          <i className="bi bi-telephone-fill"></i>
          <span className="ml-1 tracking-wide">+1 (519) 432-3222</span>
        </a>
      </div>
    );
  },
};
