import React from 'react'
import ConsultingBg from "./../assets/consulting_bg.svg"
import Consulting1 from "./../assets/consulting1.svg"
import Consulting2 from "./../assets/consulting2.svg"
import Consulting3 from "./../assets/consulting3.svg"
import Consulting4 from "./../assets/consulting4.svg"
import Consulting5 from "./../assets/consulting5.svg"
import Consulting6 from "./../assets/consulting6.svg"


const Consalting = () => {
  return (
    <div>
      <div className="w-[1100px] my-0 mx-auto mt-16">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-6xl text-blue-700 font-medium py-10">
          IT консалтинг
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              Мы можем повысить квалификацию ваших сотрудников тем самым увеличить эффективность вашей компании.
            </p>
            <div className=" grid grid-cols-3 gap-5 mt-10">
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Consulting1} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Consulting2} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Backend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Consulting3} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Consulting4} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Backend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Consulting5} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Consulting6} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
            </div>
          </div>
          <div className="max-w-[45%] py-11 mt-6 relative ">
            <img src={ConsultingBg} alt="img" />
          </div>
        </div>
      </div>
    </div>      
    </div>
  )
}

export default Consalting