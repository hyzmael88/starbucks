import React from 'react'

function Celebramos() {
  return (
    <div className="flex flex-row justify-center items-center">
    <div className="flex flex-row bg-[#1e3932] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center mb-[30px] ">
    <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_20%20a%C3%B1os.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-1/2 object-cover "
      />
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <h2 className="font-bold text-white text-[28px]">CELEBRAMOS <br /> 20 AÑOS EN MÉXICO</h2>
        <p className="text-[19px] text-white mt-6 mb-4 ">
        Crecimos juntos, nos apoyamos siempre y seguimos adelante; cuenta con nosotros en cada café, en cada momento y en todos y cada uno de tus días.
        </p>
        <p className="text-[19px] text-white mt-6 mb-4 ">
        Porque esta historia juntos, apenas comienza.
        </p>
      </div>
     
    </div>
  </div>
  )
}

export default Celebramos