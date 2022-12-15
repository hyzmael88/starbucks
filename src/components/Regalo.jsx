import React from 'react'

function Regalo() {
  return (
    <div className="flex flex-row justify-center items-center">
    <div className="flex flex-row bg-[#f4cdd4] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center mb-[30px] ">
      
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <h2 className="font-bold text-[#d3283a] text-[28px]">UN REGALO
MUY ESPECIAL PARA TÍ
Y PARA LA TIERRA</h2>
        <p className="text-[19px] text-[#d3283a] mt-6 mb-4 ">
        Trae tu vaso o termo a tu Starbucks favorito y obtén $8 pesos de descuento en tu bebida.
        </p>
      </div>
      <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_merch.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-1/2 object-cover "
      />
    </div>
  </div>
  )
}

export default Regalo