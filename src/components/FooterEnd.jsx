import React from 'react'
import {FaFacebookF } from "react-icons/fa";
import {BsInstagram, BsTwitter, BsYoutube, BsFacebook} from "react-icons/bs";

function FooterEnd() {
  return (
    <div className='flex flex-col text-center xl:max-w-[1240px] w-full pt-[30px] pb-[20px]'>
        <div className='flex flex-row justify-center items-center mb-[20px]'>
            <div className='rounded-full w-[36px] h-[36px] bg-black mr-[30px]'>

        <FaFacebookF  size={20} className='  text-white ml-2 mt-2'/>
            </div>
            <div className='rounded-full w-[36px] h-[36px] bg-black mr-[30px]'>

        <BsInstagram size={20} className='  text-white ml-2 mt-2'/>
            </div>
            <div className='rounded-full w-[36px] h-[36px] bg-black mr-[30px]'>

        <BsTwitter size={20} className=' mr-[30px] text-white  ml-2 mt-2'/>
            </div>
            <div className='rounded-full w-[36px] h-[36px] bg-black mr-[30px]'>

        <BsYoutube size={20} className=' mr-[30px] p-0 text-white  ml-2 mt-2' />
            </div>

        </div>
        <div>
            <ul className='flex flex-wrap flex-row justify-center mb-[15px]'>
                <li className=' px-4 border-r-[2px] border-[#999999] text-[#999999] mb-[15px]'>
                    Accesibilidad Web
                </li>
                <li className=' px-4 border-r-2 border-[#999999] text-[#999999] mb-[15px]'>
                    Aviso de Privacidad
                </li>
                <li className=' px-4 border-r-2 border-[#999999] text-[#999999] mb-[15px]'>
                    Boletines
                </li>
                <li className=' px-4 border-r-2 border-[#999999] text-[#999999] mb-[15px]'>
                    Condiciones de uso
                </li>
                <li className=' px-4 border-r-2 border-[#999999] text-[#999999] mb-[15px]'>
                    Mapa de sitio
                </li>
                <li className=' px-4  text-[#999999] mb-[15px]'>
                    Preferencias sobre cookies
                </li>
            </ul>
            <div>
                <p className='  text-[#999999]'>Ⓒ 2022. Starbucks Cofee Company. Reservados todos los derechos</p>
                <p className='  text-[#999999] text-[10px]'>mx | prod | 47affb8573bf271e4505a3841c4d888305d932dc | 26/10/2022-22:48:57:164</p>
        
            </div>
        </div>
    </div>
  )
}

export default FooterEnd