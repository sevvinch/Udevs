import React from "react";
import Erp1 from "./../assets/erp1.svg";
import Erp2 from "./../assets/erp2.svg";
import Erp3 from "./../assets/erp3.svg";
import Erp4 from "./../assets/erp4.svg";
import Erp5 from "./../assets/erp5.svg";
import Erp6 from "./../assets/erp6.svg";
import ErpBg from "./../assets/erp_bg.png"

const ErpSystem = () => {
  return (
    <div className="bg-[#F4F7FF] mt-16">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-6xl text-blue-700 font-medium py-10">
          ERP cистемы
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[45%] py-11 mt-6 relative ">
            <img src={ErpBg} alt="" />
          </div>
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              IT Системы любого уровня сложности в удобные для вас сроки.
            </p>
            <div className="grid grid-cols-3 gap-5 mt-10">
              <div className="p-4 bg-[#E0E8FF] border rounded-lg">
                <img src={Erp1} alt="CRM" className="w-[46px] h-[46px]" />
                <p className="pl-2 text-lg font-medium">CRM</p>
              </div>
              <div className="p-4 bg-[#E0E8FF] border rounded-lg">
                <img src={Erp2} alt="CRM" className="w-[46px] h-[46px]" />
                <p className="pl-2 text-lg font-medium">eLearning</p>
              </div>
              <div className="p-4 bg-[#E0E8FF] border rounded-lg">
                <img src={Erp3} alt="CRM" className="w-[46px] h-[46px]" />
                <p className="pl-2 text-lg font-medium">E-Commerce</p>
              </div>
              <div className="p-4 bg-[#E0E8FF] border rounded-lg">
                <img src={Erp4} alt="CRM" className="w-[46px] h-[46px]" />
                <p className="pl-2 text-lg font-medium">POS</p>
              </div>
              <div className="p-4 bg-[#E0E8FF] border rounded-lg">
                <img src={Erp5} alt="CRM" className="w-[46px] h-[46px]" />
                <p className="pl-2 text-lg font-medium">CRM</p>
              </div>
              <div className="p-4 bg-[#E0E8FF] border rounded-lg">
                <img src={Erp6} alt="CRM" className="w-[46px] h-[46px]" />
                <p className="pl-2 text-lg font-medium">CRM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpSystem;
