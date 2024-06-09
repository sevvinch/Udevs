import React from 'react'
import DesignBg from "./../assets/design_bg.png"
import Design1 from "./../assets/design1.svg"
import Design2 from "./../assets/design2.svg"
import Design3 from "./../assets/design3.svg"
import Design4 from "./../assets/design4.svg"
import Design5 from "./../assets/design5.svg"
import Design6 from "./../assets/design6.svg"
import Figma from "./../assets/figma.svg"
import Sketch from "./../assets/sketch.svg"
import Lottie from "./../assets/lottie.svg"
import Illustrator from "./../assets/illustrator.svg"

const UiDesign = () => {
  return (
    <div className="w-[1100px] my-0 mx-auto mt-16">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-5xl text-blue-700 font-medium py-10">
          UI / UX design
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              Our company takes a human-centered approach to design
            </p>
            <div className="grid grid-cols-3 gap-5 mt-10">
              {[Design1, Design2, Design3, Design4, Design5, Design6].map((design, index) => (
                <div key={index} className="p-4 bg-blue-100 border rounded-lg flex flex-col items-center">
                  <img src={design} alt={`Design ${index + 1}`} className="w-[46px] h-[46px]" />
                  <p className="text-lg font-medium mt-2">Prototyping</p>
                </div>
              ))}
            </div>
            <p className="text-3xl font-medium mt-7">Dedicated team</p>
            <div className="flex gap-12 mt-8">
              {[{img: Figma, label: "Figma"}, {img: Sketch, label: "Sketch"}, {img: Lottie, label: "Lottie"}, {img: Illustrator, label: "Illustrator"}].map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tool.img} alt={tool.label} className="w-16 h-16" />
                  <p className="text-center text-lg font-medium mt-2">{tool.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[45%] py-11 mt-6 relative">
            <img src={DesignBg} alt="Design Background" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UiDesign
