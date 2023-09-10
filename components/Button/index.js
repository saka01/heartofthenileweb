import Link from "next/link";
import theme from "../../public/styles/theme";

export const Button = {
  Default: ({ url, label, icon }) => {
    return (
      <Link href={`${url}`}>
        <span
          className={`w-64 text-center text-xl  py-12 px-10 rounded-2xl shadow hover:shadow-2xl bg-white text-gray-900 hover:text-[#CE2829]  cursor-pointer uppercase font-semibold`}
        >
          {label} {icon ? <i className="bi bi-cart-fill"></i> : null}
        </span>
      </Link>
    );
  },
  Primary: ({ url, label, icon }) => {
    return (
      <Link href={`${url}`}>
        <span
          className={`w-64 text-center text-xl  py-12 px-10 rounded-2xl shadow hover:shadow-2xl bg-[${theme.primary}] text-white  cursor-pointer uppercase font-semibold`}
        >
          {label} {icon ? <i className="bi bi-cart-fill"></i> : null}
        </span>
      </Link>
    );
  },
  Secondary: ({ url, label, icon }) => {
    return (
      <Link href={`${url}`}>
        <span
          className={`w-44 text-center text-base  py-12 px-10 rounded-2xl shadow hover:shadow-2xl tracking-wider bg-[${theme.secondary}] text-white  cursor-pointer uppercase font-semibold`}
        >
          {label} {icon ? <i className="bi bi-cart-fill"></i> : null}
        </span>
      </Link>
    );
  },
};
