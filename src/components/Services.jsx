import React from 'react';
import Service1 from '../assets/services1.svg';
import Service2 from '../assets/services2.svg';
import Service3 from '../assets/services3.svg';
import Service4 from '../assets/services4.svg';
import Service5 from '../assets/services5.svg';
import Service6 from '../assets/services6.svg';

const Services = () => {
  return (
    <div className="w-[1100px] my-0 mx-auto bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-6xl font-semibold leading-7 text-indigo-600">Наши услуги</h2>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="p-6 bg-[#F4F7FF] rounded-[10px]">
            <div className="h-12 w-12  flex items-center justify-center">
              <img src={Service1} alt="Выделенная команда" className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#18191F] pb-2">Выделенная команда</h3>
          </div>
          <div className="p-6 pb-2 bg-[#F4F7FF] rounded-[10px]">
            <div className="h-12 w-12  flex items-center justify-center">
              <img src={Service2} alt="Разработка мобильных приложений" className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#18191F] pb-2">
              Разработка мобильных  <br />приложений
            </h3>
          </div>
          <div className="p-6 bg-[#F4F7FF] rounded-[10px]">
            <div className="h-12 w-12  flex items-center justify-center">
              <img src={Service3} alt="Разработка и внедрение ERP систем" className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#18191F] pb-2">
              Разработка и внедрение <br />  ERP систем
            </h3>
          </div>
          <div className="p-6 bg-[#F4F7FF] rounded-[10px]">
            <div className="h-12 w-12  flex items-center justify-center">
              <img src={Service4} alt="UI/UX дизайн" className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#18191F] pb-2">UI/UX дизайн</h3>
          </div>
          <div className="p-6 bg-[#F4F7FF] rounded-[10px]">
            <div className="h-12 w-12  flex items-center justify-center">
              <img src={Service5} alt="Оптимизация инфраструктуры" className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#18191F] pb-2">
              Оптимизация инфраструктуры
            </h3>
          </div>
          <div className="p-6 bg-[#F4F7FF] rounded-[10px]">
            <div className="h-12 w-12  flex items-center justify-center">
              <img src={Service6} alt="IT консалтинг" className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-[#18191F] pb-2">IT консалтинг</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;