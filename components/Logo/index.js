import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return(
        <Link href={"/"} className="navbar-brand">
            <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="Heart Of The Nile Logo" />
        </Link> 
    )
}