import Image from "next/image";
import React from "react";
import Logo from "../../images/fonarev.png";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <header className="h-20 w-full flex items-center relative">
            <Image src={Logo} alt="" className="w-[232px] h-[80px] " />
            <nav className=" ml-[50%] ">
                <ul className="flex items-center justify-between ">

                    <li className="ml-6">
                        <Link href={"/"} className={
                            currentRoute === "/"
                                ? "text-[#0080C8] "
                                : " text-[#0080C8] hover:text-[#0080C8] "
                        } >Home</Link>
                    </li>
                    <li className="ml-6">
                        <Link href={"/donation"} >Make a donation</Link>
                    </li>
                    <div className="w-[30vh] flex  justify-evenly ">
                        <FaFacebook size={30} color="#0080C8" />
                        <AiFillInstagram size={30} color="#0080C8" />
                    </div>
                    <div className="w-[40px] h-[40px] border-2 border-[#0080C8] flex items-center justify-center rounded-[10px] ">
                        <p className="text-[12px] text-[#0080C8] ">EN</p>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
