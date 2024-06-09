import React from 'react';
import { PiCaretDownBold } from "react-icons/pi";
import Logo from "./../assets/logo.svg";
import Phone from "../assets/services2.svg";
import Sistem from "../assets/services3.svg";
import Design from "../assets/services4.svg";
import Consalting from "../assets/services6.svg";
import Optimization from "../assets/services5.svg";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white  z-50">
      <div className="w-[1100px] my-0 mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Udevs Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-4 gap-8">
          <a href="#services" className="text-gray-700 hover:border-b transition-all duration-300 border-blue-600">Услуги</a>
          <a href="#team" className="text-gray-700 hover:border-b transition-all duration-300 border-blue-600">Команда</a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:border-b transition-all duration-300 border-blue-600">
              Направление
              <PiCaretDownBold className="mt-[2px]" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-8 rounded w-56">
              <a href="#mobile-development" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Phone} alt="Mobile Development" />
                <span className="ml-2">Разработка мобильных приложений</span>
              </a>
              <a href="#erp-systems" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Sistem} alt="ERP Systems" />
                <span className="ml-2">Разработка и внедрение ERP систем</span>
              </a>
              <a href="#ui-ux-design" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Design} alt="UI/UX Design" />
                <span className="ml-2">UI / UX дизайн</span>
              </a>
              <a href="#it-consulting" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Consalting} alt="IT Consulting" />
                <span className="ml-2">IT консалтинг</span>
              </a>
              <a href="#infrastructure-optimization" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Optimization} alt="Infrastructure Optimization" />
                <span className="ml-2">Оптимизация инфраструктуры</span>
              </a>
            </div>
          </div>
          <a href="#instruments" className="text-gray-700 hover:border-b transition-all duration-300 border-blue-600">Инструменты</a>
          <a href="#clients" className="text-gray-700 hover:border-b transition-all duration-300 border-blue-600">Клиенты</a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:border-b transition-all duration-300 border-blue-600">
              Портфолио
              <PiCaretDownBold className="mt-[2px]" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-8 rounded w-56">
              <a href="#portfolio-delever" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Phone} alt="Delever" />
                <span className="ml-2">Delever</span>
              </a>
              <a href="#portfolio-sms-uz" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Sistem} alt="Sms.uz" />
                <span className="ml-2">Sms.uz</span>
              </a>
              <a href="#portfolio-goodzoone" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Design} alt="Goodzoone" />
                <span className="ml-2">Goodzoone</span>
              </a>
              <a href="#portfolio-iman" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src={Consalting} alt="Iman" />
                <span className="ml-2">Iman</span>
              </a>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Связаться</button>
        </nav>
        <button className="md:hidden text-gray-700 hover:border-b transition-all duration-300 border-blue-600">Menu</button>
      </div>
    </header>
  );
};

export default Header;
