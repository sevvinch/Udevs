import React from "react";
import Apple from "./../assets/IOS.svg";
import Android from "./../assets/Android.svg"
import Crossplatform from "./../assets/crossplatform.svg"
import Swift from "./../assets/swift.svg";
import Kotlin from "./../assets/kotlin.svg"
import Flutter from "./../assets/flutter.svg"
import Team from "./../assets/mobile_dev.png";

const MobileDev = () => {
  return (
    <div className="w-[1100px] my-0 mx-auto mt-20">
      <h1 className="text-6xl text-blue-700 font-medium py-10">
        Мобильная разработка
      </h1>
      <div className="flex justify-between items-center">
        <div className="max-w-[47%]">
          <p className="text-2xl opacity-85 ">
            В сотрудничестве со стартапами мы научились создавать творческий и 
            функциональный пользовательский интерфейс для мобильных приложений.
          </p>
          <div className="mt-10 flex gap-5">
            <div className="p-4 bg-blue-100 w-[30%] rounded-lg">
              <img src={Apple} alt="img" />
              <p className="pl-2">iOS</p>
            </div>
            <div className="p-4 bg-blue-100 w-[30%] rounded-lg">
              <img src={Android} alt="img" />
              <p className="pl-2">Android</p>
            </div>
            <div className="p-4 bg-blue-100 w-[30%] rounded-lg">
              <img src={Crossplatform} alt="img" />
              <p className="pl-2">Crossplatform</p>
            </div>
          </div>
          <p className="text-2xl font-medium mt-7">Технологии</p>
          <div className="flex gap-10 mt-5">
            <div>
              <img src={Swift} alt="img" className="w-[56px] h-[56px]" />
              <p className="text-center text-lg font-medium ">Swift</p>
            </div>
            <div>
              <img src={Kotlin} alt="img" />
              <p className="text-center text-lg font-medium ">Kotlin</p>
            </div>
            <div>
              <img src={Flutter} alt="img" />
              <p className="text-center text-lg font-medium ">Flutter</p>
            </div>
          </div>
        </div>
        <div className="max-w-[47%] ">
          <img src={Team} alt="Team" />
        </div>
      </div>
    </div>
  );
};

export default MobileDev;
