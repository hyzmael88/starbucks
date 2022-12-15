import React from 'react'

function Blend() {
  return (
    <div className="flex flex-row justify-center items-center">
    <div className="flex flex-row bg-[#d3283a] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center mb-[30px] ">
      
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <h2 className="font-bold text-white text-[28px]">STARBUCKS <br /> CHRISTMAS BLEND 2022</h2>
        <p className="text-[19px] text-white mt-6 mb-4 ">
        Lleva la alegría de las fiestas a casa con una taza llena de especias dulces y notas de chocolate. <br /> #LeDamosMagiaATusFiestas
        </p>
      </div>
      <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_christmas.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-1/2 object-cover "
      />
    </div>
  </div>
  )
}

export default Blend