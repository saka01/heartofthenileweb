import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return(
        <Link href={"/"} className="navbar-brand">
            <Image
            src={"/images/logo.png"}
            width={200}
            height={150}
            alt="Heart Of The Nile Logo" />
        </Link> 
    )
}