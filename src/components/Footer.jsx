import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logomain.png";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="flex flex-row justify-between border-t-2 border-[#ABB2BF] mt-5 px-[6%] py-[2%] items-start">
      <div>
        <div className="flex flex-row justify-start gap-5 items-center">
          <Link
            href="/"
            className="flex flex-row align-middle gap-3 items-center"
          >
            <Image src={Logo} alt="logo" className="w-[20px]" />
            <h2 className="text-[14px] font-bold text-white hover:text-[#C778DD]">
              Dev-Clinton
            </h2>
          </Link>
          <Link
            href="mailto:confidinho@yahoo.com"
            className="text-[#ABB2BF] text-[14px]"
          >
            confidinho@yahoo.com
          </Link>
        </div>
        <p className="mt-5 text-white">
          Website developer & mobile app developer
        </p>
      </div>
      <div>
        <h2 className="text-[24px] text-white font-semibold">Media</h2>
        <div className="flex flex-row gap-5 mt-2">
          <Link href="/">
            <BsGithub className="text-[#ABB2BF] hover:text-[#C778DD]" />
          </Link>
          <Link href="/">
            <BsFacebook className="text-[#ABB2BF] hover:text-[#C778DD]" />
          </Link>
          <Link href="/">
            <BsTwitter className="text-[#ABB2BF] hover:text-[#C778DD]" />
          </Link>
          <Link href="/">
            <BsLinkedin className="text-[#ABB2BF] hover:text-[#C778DD]" />
          </Link>
          <Link href="/">
            <BsInstagram className="text-[#ABB2BF] hover:text-[#C778DD]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
