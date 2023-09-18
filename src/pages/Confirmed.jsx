import "../index.css";
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';
import Logo from '../components/Logo/Logo';
import Footer from '../components/Footer/Footer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Ro from '../components/Ro/Ro';
import { Link } from 'react-router-dom';

function Confirmed() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


  function onclickLink(){
    gsap.to(window, {duration: 2, scrollTo:"#services"})
  }
  function onclickLink2(){
    gsap.to(window, {duration: 2, scrollTo:0})
  }
  function onclickLink3(){
    gsap.to(window, {duration: 2, scrollTo:"#contact"})
  }



  return (
    <div className="App" ref={ref}>
      <div className='fixed z-40 w-full'>
        <div className=" mt-4 headertop lg:px-9 px-2 justify-center ">
              <div className="p-4 w-full header lg:rounded-[30px] rounded-[25px] border-2 border-opacity-10 items-center flex flex-row bg-pine bg-opacity-40 backdrop-blur-lg border-white">
                  <Link to="/">
                  <div className='flex space-x-2 items-center'>
                      <Logo className=" lg:ml-7 ml-2 h-16"/>
                      <p className='logo font-cotta text-xl w-64 text-gold'>Golden Age Care</p>
                  </div>
                  </Link>
                 
                 
              </div>
          </div>
      </div>
      <div className='space-y-32 py-64'>
      <section id="home" className='first  space-y-32'>
        <h1 className='motto lg:px-24 leading-snug text-center font-reckless text-4xl lg:text-[4rem] text-gold'>Vă mulțumim, vă vom contacta în cel mai scurt timp!</h1>
        <h1 className='motto lg:px-24 leading-snug text-center font-reckless text-4xl lg:text-[4rem] text-gold'>Thank you, we will get to back you as soon as possible!</h1>
      </section>
      </div>
      <section className=''>
        <Footer />
      </section>
    </div>
  );
}

export default Confirmed;
