import React from 'react';
import TeamBg from './../assets/team_bg.svg';

const Team = () => {
  return (
    <div className="w-full bg-[#F4F7FF] py-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="max-w-2xl lg:text-left">
          <h2 className="text-[48px] lg:text-[70px] font-semibold leading-7 text-blue-600 mb-[80px] whitespace-nowrap">Выделенная команда</h2>
          <p className="mt-4 text-base font-bold tracking-tight text-gray-700">
            Для каждого проекта мы формируем команду, в
            <br />
            которую входят проект менеджер, бизнес-
            <br />
            аналитик, UI/UX дизайнер, DevOps, QA-инженер,
            <br />
            бэкенд и фронтенд разработчики
          </p>
          <div className="relative flex items-start mt-16">
            <div className="flex items-center justify-center">
            </div>
            <div className="ml-4">
              <p className="text-[48px] lg:text-[60px] font-semibold leading-8 tracking-tight text-blue-600">100+</p>
              <p className="mt-2 text-base leading-7 text-gray-600">Сотрудников</p>
            </div>
          </div>
        </div>
        <div className="mt-[100px] lg:mt-0 lg:ml-16">
          <img src={TeamBg} alt="Team" className="w-full max-w-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Team;
