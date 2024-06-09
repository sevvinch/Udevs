import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';
import Services from './components/Services';
import Team from "./components/Team";
import MobileDev from './components/MobileDev';
import ErpSystem from './components/ErpSystem';
import UiDesign from './components/UiDesign';
import Consalting from './components/Consalting';
import Tools from "./components/Tools"
import Delever from './components/Delever';
import SmsUz from './components/SmsUz';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Optimization from './components/Optimization';

function App() {
  return (
    <div className=''>
      <Header />
      <hr className=' border-b border-gray-200' />
      <Hero />
      <Services/>
      <Team/>
      <MobileDev/>
      <ErpSystem/>
      <UiDesign/>
      {/* <Optimization/> */}
      <Consalting/>
      <Tools/>
      <Delever/>
      <SmsUz/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
