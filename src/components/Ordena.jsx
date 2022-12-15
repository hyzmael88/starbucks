import React from 'react'

function Ordena() {
  return (
    <div className="flex flex-row justify-center items-center">
    <div className="flex flex-row bg-[#1e3932] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center mb-[30px] ">
    <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_omnicanalidad.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-1/2 object-cover "
      />
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <h2 className="font-bold text-white text-[28px]">ORDENA LA MAGIA DE LAS <br /> FIESTAS COMO TÚ QUIERAS</h2>
        <p className="text-[19px] text-white mt-6 mb-4 ">
        Ordena desde nuestra app y recibe en casa con Starbucks Rewards Delivery, recoge en tienda a través de Pickup o desde tu auto con Car Pickup
        </p>
        <button type='button' className='text-white text-[16px] font-bold px-[16px] py-[7px] rounded-xl border-2 border-white '>Más información</button>

      </div>
     
    </div>
  </div>
  )
}

export default Ordena