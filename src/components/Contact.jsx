import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-[1100px] my-0 mx-auto  py-24 flex justify-center">
      <div className=" bg-white p-8 rounded-lg shadow-md flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Оставьте нам сообщение</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Ваша почта"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Кратко опишите свой проект"
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
            ></textarea>
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold">
              Отправить
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-4" />
              <span>Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-600 mr-4" />
              <span>+998 33 66 00 999</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-4" />
              <span>azizbek.b@udevs.io</span>
            </div>
            <div className="flex items-center">
              <FaTelegramPlane className="text-blue-600 mr-4" />
              <a href="https://t.me/azizbekbakhodirov" target="_blank" rel="noopener noreferrer">t.me/azizbekbakhodirov</a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600"><FaFacebookF /></a>
              <a href="#" className="text-blue-600"><FaInstagram /></a>
              <a href="#" className="text-blue-600"><FaTwitter /></a>
              <a href="#" className="text-blue-600"><FaTelegramPlane /></a>
            </div>
            <div className="mt-4">
              <iframe
                src="https://maps.google.com/maps?q=Udevs&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Udevs Location"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
