import React from 'react'
import Optimization1 from "./../assets/optimization1.svg"
import Optimization2 from "./../assets/optimization2.svg"
import Optimization3 from "./../assets/optimization3.svg"
import Optimization4 from "./../assets/optimization4.svg"
import Optimization5 from "./../assets/optimization5.svg"
import Optimization6 from "./../assets/optimization6.svg"


const Optimization = () => {
  return (
    <div>
   <div className="bg-blue-100 mt-16">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-7xl text-blue-700 font-medium py-10">
         Оптимизация инфраструктуры
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[45%] py-11 mt-6 relative ">
            <img src={Team} alt="img" className=" relative" />
            <img src={Image} alt="img" className=" absolute top-32" />
          </div>
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              Наши опытные специалисты помогут оптимизировать вашу инфраструктуру.
            </p>
            <div className=" grid grid-cols-3 gap-5 mt-10">
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={Optimization1} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Architecture</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={Optimization2} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Auto testing</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={Optimization3} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Stress testing</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={Optimization4} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">CI / CD</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={Optimization5} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Load test</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={Optimization6} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Devops</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={Optimization7} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Optimization