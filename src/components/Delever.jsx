import React from 'react'
import DeleverBg from "./../assets/delever.png"
import Delever1 from "./../assets/delever1.svg"
import Delever2 from "./../assets/delever2.svg"
import Delever3 from "./../assets/delever3.svg"
import Delever4 from "./../assets/delever4.svg"
import Delever5 from "./../assets/delever5.svg"


const Delever = () => {
  return (
    <div>
    <div className="max-w-[1100px] mx-auto">
      <h1 className="text-6xl text-red-500  font-semibold text-center ml-96 py-10">
        Delever
      </h1>
      <div className="flex justify-between items-center">
        <div className="max-w-[48%] py-11 mt-6 relative ">
          <img src={DeleverBg} alt="img" className=" relative" />
        </div>
        <div className="max-w-[47%]">
          <p className="text-2xl opacity-85 ">
            Our experienced professionals will help you optimize your
            infrastructure
          </p>
          <p className="text-3xl mt-5 font-bold">What we did?</p>
          <div className=" grid grid-cols-3 gap-5 mt-10">
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Delever1} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Website</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Delever2} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Admin panel</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Delever3} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Auto testing</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Delever4} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Crossplatform</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Delever5} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Load test</p>
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Delever