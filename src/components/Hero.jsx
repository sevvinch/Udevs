import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import HeroBg from "../assets/hero_bg.svg";
import Logo from "../assets/logo.svg";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Разработка и внедрение ERP систем",
      "Разработка мобильных приложений",
      "UI/UX дизайн",
      "IT консалтинг"
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
  });

  return (
    <div className="w-[1100px] my-0 mx-auto relative flex items-center justify-between py-[100px]">
      <div className="text-left">
        <img src={Logo} alt="Udevs Logo" className="mt-[-90px] w-[40%] mb-[45px]" />
        <h1 className="text-4xl font-bold text-[#464359] mb-4">IT-Аутсорсинг Компания</h1>
        <div className="w-[70%] text-4xl font-semibold text-[#1B5BF7]">
          {text}
          <Cursor cursorStyle="|" />
        </div>
        <div className="mt-6">
          <button className="bg-[#1B5BF7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1B5BF7] transition duration-300">Связаться</button>
        </div>
      </div>
      <div className="hidden sm:block">
        <img src={HeroBg} alt="Hero Background" className="w-[600px] h-[400px] object-cover static" />
      </div>
    </div>
  );
}

export default Hero;
