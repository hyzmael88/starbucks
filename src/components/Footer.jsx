import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import FooterEnd from './FooterEnd';

function Footer() {
  return (
    <div className='border-t-2 border-gray-200'>
      <div className='flex flex-col justify-center items-center mx-[20px] py-[20px]'>
        <div className='flex flex-row justify-between w-full mb-[24px] '>
          <h3 className='text-[19px]'>Sobre Nosotros</h3>
          <IoChevronDown size={25}/>
        </div>
        <div className='flex flex-row justify-between w-full mb-[24px] '>
          <h3 className='text-[19px]'>Atención al cliente</h3>
          <IoChevronDown size={25}/>
        </div>

        

      </div>
      <FooterEnd/>
    </div>
  )
}

export default Footer