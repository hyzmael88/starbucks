import React from 'react'

function Gratis() {
  return (
    <div className="flex flex-row justify-center items-center">
    <div className="flex flex-row bg-[#1e3932] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center mb-[30px] ">
      
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <h2 className="font-bold text-white text-[28px]">A UN PASO... <br /> DE MÁS CAFÉ GRATIS</h2>
        <p className="text-[19px] text-white mt-6 mb-4 ">
        Sé parte de Starbucks Rewards y descubre un mundo lleno de recompensas: café gratis, acceso anticipado a nuevos productos, promociones exclusivas y más.
        </p>
        <button type='button' className='text-white text-[16px] font-bold px-[16px] py-[7px] rounded-xl border-2 border-white '>Conoce más</button>
      </div>
      <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_Rewards.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-1/2 object-cover "
      />
    </div>
  </div>
  )
}

export default Gratis