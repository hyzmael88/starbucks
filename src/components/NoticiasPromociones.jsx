import React from 'react'

function NoticiasPromociones() {
  return (
    <div className="grid gap-x-4 grid-cols-2 justify-center items-center">
    <div className="flex flex-col gap-x-4 bg-[#1e3932] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center mb-[30px] ">
    <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_Noticias.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-full object-cover "
      />
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <p className="text-[19px] text-white mt-6 mb-4 ">
       Consulta los eventos más <br />recientes.
        </p>
                <button type='button' className='text-white text-[16px] font-bold px-[16px] py-[7px] rounded-xl border-2 border-white '>Aquí</button>

       
      </div>
     
    </div>

    <div className="flex flex-col bg-[#1e3932] xl:max-w-[1400px] w-full xl:max-h-[409px] justify-center items-center mb-[30px] ">
    <img
        src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-11%2Fsitio%20web_Home_xmas_22_PNG_TC.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
        alt="imagen1"
        className="h-full w-full object-cover "
      />
      <div className="flex flex-col  justify-center text-center mx-[5%] px-4 py-8 md:max-w-[900px] w-full ">
        <p className="text-[19px] text-white mt-6 mb-4 ">
       Términos y <br /> condiciones
        </p>
                <button type='button' className='text-white text-[16px] font-bold px-[16px] py-[7px] rounded-xl border-2 border-white '>Ver más</button>

       
      </div>
     
    </div>
  </div>
  )
}

export default NoticiasPromociones