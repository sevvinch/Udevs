import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-24" id="footer">
      <div className="max-w-[1140px] mx-auto px-4 md:px-0">
        <div className="flex justify-between ">
          <div className="  md:w-1/3">
            <h3 className="font-bold mb-4">About us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Direction
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Command
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Tools
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Clients
                </a>
              </li>
            </ul>
          </div>
          <div className="  md:w-1/3">
            <h3 className="font-bold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Development of mobile applications
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Development and implementation ERP systems
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  User interface, User experience design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  IT consulting
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Optimization IT consulting infrastructure
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end  md:w-1/3">
            <h3 className="font-bold mb-4">Portfolio</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Delever
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Sms.uz
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Goodzone
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#1B5BF6] hover:text-[#1B5BF6]">
                  Iman
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-300 pt-4">
          <p className="text-gray-600">
            &copy; 2024 Udevs. All rights reserved
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/">
              <FaInstagram className="text-[#1B5BF6] hover:text-[#1B5BF6] text-2xl" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookF className="text-[#1B5BF6] hover:text-[#1B5BF6] text-2xl" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter className="text-[#1B5BF6] hover:text-[#1B5BF6] text-2xl" />
            </a>
            <a href="https://www.youtube.com/">
              <AiOutlineYoutube className="text-[#1B5BF6] hover:text-[#1B5BF6] text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
