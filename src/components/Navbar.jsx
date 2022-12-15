import React from "react";
import { IoLocationSharp } from "react-icons/io5";
function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center shadow-lg    ">
      <div className="flex flex-row justify-between xl:max-w-[1280px] w-full h-[70px] sm:h-[90px] px-[20px]">
        <div className="flex flex-row items-center ">
          <img
            className="sm:h-[50px] h-[40px] mr-[40px]"
            src="https://www.starbucks.com.mx/static/images/logo.svg"
            alt="logo"
          />
          <span className="mr-[40px] font-bold">MENU</span>
          <span className="font-bold">REWARDS</span>
        </div>
        <div className="flex flex-row items-center ">
          <div className="flex flex-row">
            <IoLocationSharp
              size={22}
              className="inline-block align-text-bottom"
            />
            <span className="mr-[40px] font-bold text-[16px]">
              Localizar Tienda
            </span>
          </div>
          <button className="mr-[20px] rounded-3xl px-[16px] py-[7px] bg-white  font-bold border-2 border-black">
            Ingresar
          </button>
          <button className="rounded-3xl px-[16px] py-[7px] bg-black text-white font-bold">
            Únete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
