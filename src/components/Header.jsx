import React from "react";
import Logo from "../../public/logomain.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="mx-[6%] my-[2%] flex text-white flex-row justify-between items-center gap-5">
      <div>
        <Link
          href="/"
          className="flex flex-row align-middle gap-3 items-center"
        >
          <Image src={Logo} alt="logo" className="w-[30px]" />
          <h2 className="text-[16px] font-bold hover:text-[#C778DD]">
            Dev-Clinton
          </h2>
        </Link>
      </div>
      <div className="gap-5 hidden md:flex text-[#ABB2BF]">
        <Link
          href="/"
          className="text-white font-medium text-[16px]  hover:text-white"
        >
          <span className="text-[#C778DD]">#</span>home
        </Link>
        <Link href="/" className="font-medium text-[16px]  hover:text-white">
          <span className="text-[#C778DD]">#</span>works
        </Link>
        <Link href="/" className="font-medium text-[16px]  hover:text-white">
          <span className="text-[#C778DD]">#</span>about-me
        </Link>
        <Link href="/" className="font-medium text-[16px]  hover:text-white">
          <span className="text-[#C778DD]">#</span>contacts
        </Link>
      </div>
    </div>
  );
}

export default Header;
