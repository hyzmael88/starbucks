import React from 'react'

function Magia() {
  return (
    <div className="flex flex-row justify-center items-center mb-[30px]">
    <div className="flex flex-row bg-[#00b388] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center ">
      <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_bebidas%20temporada.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-1/2 object-cover "
      />
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <h2 className="font-bold text-white text-[28px] font-SoDoSans-bold">LA MAGIA <br /> DE FESTEJAR</h2>
        <p className="text-[19px] text-white mt-6 mb-4 ">
          Tenemos todos tus favoritos listos para que llenes las fiestas de
          felicidad. <br /> #LeDamosMagiaATusFiestas
        </p>
      </div>
    </div>
  </div>
  )
}

export default Magia