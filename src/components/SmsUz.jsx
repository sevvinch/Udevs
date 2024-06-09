import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import SmsBg from "./../assets/smsuz.png"
import Sms1 from "./../assets/sms1.svg"
import Sms2 from "./../assets/sms1.svg"
import Sms3 from "./../assets/sms1.svg"


const SmsUz = () => {
  return (
    <div>
    <div className="w-[1100px] mx-auto mt-16">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="max-w-[47%]">
            <h1 className="text-6xl text-blue-700 font-medium py-5">Smsuz</h1>
            <div className="inline-flex  border rounded-lg items-center py-1 my-3 px-4 gap-2 bg-blue-300">
              <FaRegEnvelope className="text-blue-700" />
              <p className="text-blue-700">Notification</p>
            </div>

            <p className="text-2xl opacity-85 ">
              Smsuz.uz - It is a platform for bulk SMS messaging.
            </p>
            <p className="text-3xl mt-5 font-bold">What we did?</p>
            <div className=" grid grid-cols-3 gap-5 mt-10">
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Sms1} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Sms2} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Backend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Sms3} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
            </div>
          </div>
          <div className="max-w-[45%] py-11 mt-6 relative ">
            <img src={SmsBg} alt="img" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SmsUz