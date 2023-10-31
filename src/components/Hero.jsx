import React from "react";
import main from "../../public/main.png";
import fill from "../../public/fill.png";
import frame from "../../public/frame.png";
import Image from "next/image";
import { BsFillBox2Fill } from "react-icons/bs";

function Hero() {
  return (
    <div className="p-[6%] flex flex-row justify-between">
      <div className="w-[50%] mt-10">
        <h2 className="text-[52px] text-white font-bold">
          Dev-Clinton is a{" "}
          <span className="text-[#C778DD]">software developer</span> and {""}
          <span className="text-[#C778DD]">mobile app developer</span>.
        </h2>
        <p className="text-[16px] text-[#ABB2BF] mt-5">
          He crafts responsive platforms where technologies meet creativity
        </p>
        <button className="border border-[#C778DD] py-2 px-6 mt-10 text-white text-[16px] hover:transition-all hover:bg-[#C778DD]">
          Contact me !!
        </button>
      </div>
      <div className="relative">
        <Image src={fill} alt="fill" className="w-[200px]" />
        <Image
          src={main}
          alt="Dev-Clinton"
          className="w-[350px] md:w-[550px] mt-[-270px] object-cover z-10"
        />
        <Image
          src={frame}
          alt="frame"
          className="w-[100px] right-5 absolute top-[55%]"
        />
        <div className=" border border-[#ABB2BF] w-[480px] flex flex-row items-center gap-3 py-3 justify-center mb-5 mx-6">
          <BsFillBox2Fill className="text-[#c778dd]" />
          <p className="text-[#ABB2BF]">
            Currently working on <span className="text-[#fff]">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
