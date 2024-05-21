import "../index.css";
import Gallery from '../components/Gallery/Gallery';
import CareIcon from '../components/CareIcon/CareIcon';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';
import Logo from '../components/Logo/Logo';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Ro from '../components/Ro/Ro';
import { Link } from 'react-router-dom';
import { SwipeCarousel } from "../components/Carousel/SwipeCarousel";

function Romana() {
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



  useLayoutEffect(() =>{
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".motto"),
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 100,
        y: 0,
        
      }
    )  
  })
  useLayoutEffect(() =>{
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".header"),
      {
        border: "2px solid rgba(255, 255, 255, .2)",
      },
      {
        borderRadius: "0px",
        border: "0px solid rgba(255, 255, 255, .0)",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "center end",
          scrub: true
        }
      }
    )  
  })
  useLayoutEffect(() =>{
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".headertop"),
      {

        marginTop: "1rem"
      },
      {
        paddingLeft: "0rem",
        paddingRight: "0rem",  
        marginTop: "0rem",      
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "center end",
          scrub: true
        }
      }
    )  
  })
  useLayoutEffect(() =>{
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".homelink"),
      {
        fontWeight: "500"
      },
      {
        fontWeight: "670",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "center end",
          scrub: true,
        }
      }
    )  
    gsap.fromTo(
      element.querySelector(".homelink"),
      {
        fontWeight: "670"
      },
      {
        fontWeight: "500",
        scrollTrigger: {
          trigger: element.querySelector(".gallery"),
          start: "center end",
          end: "+=500",
          scrub: true,
        }
      }
    )
    gsap.fromTo(
      element.querySelector(".servicelink"),
      {
        fontWeight: "500"
      },
      {
        fontWeight: "670",
        scrollTrigger: {
          trigger: element.querySelector(".gallery"),
          start: "center end",
          end: "+=700",
          scrub: true,
        }
      }
    ) 
    gsap.fromTo(
      element.querySelector(".contactlink"),
      {
        fontWeight: "500"
      },
      {
        fontWeight: "670",
        scrollTrigger: {
          trigger: element.querySelector(".contact"),
          start: "top center",
          end: "+=300",
          scrub: true,
        }
      }
    ) 
    gsap.fromTo(
      element.querySelector(".servicelink"),
      {
        
      },
      {
        fontWeight: "500",
        scrollTrigger: {
          trigger: element.querySelector(".contact"),
          start: "top center",
          end: "+=300",
          scrub: true,
        }
      }
    ) 

    if(window.innerWidth < 800){


      gsap.fromTo(
        element.querySelector(".link"),
        {
          opacity: "0%",
          x:"40px"
        },
        {
          x:"0px",
          opacity: "100%",
          scrollTrigger: {
            trigger: element.querySelector(".first"),
            start: "top end",
            end: "+=900",
          }
        }

      );



      gsap.fromTo(
        element.querySelector(".logo"),
        {
          opacity: "100%",
          x: "30px",
        },
        {
          opacity: "0%",
          position: "absolute",
          x:"0px",
          display: "none",
          scrollTrigger: {
            trigger: element.querySelector(".first"),
            start: "top end",
            end: "+=300",
          }
        }

      )
      


  }

     
  }

  )
  return (
    <div className="App" ref={ref}>
      <div className='fixed z-40 w-full'>
        <div className=" mt-4 headertop lg:px-9 px-2 justify-center ">
              <div className="p-4 w-full header lg:rounded-[30px] rounded-[25px] border-2 border-opacity-10 items-center flex flex-row bg-pine bg-opacity-40 backdrop-blur-lg border-white">
                  <div className='flex space-x-2 items-center'>
                      <Logo className=" lg:ml-7 ml-2 h-16"/>
                      <p className='logo   font-cotta text-xl w-64 text-gold'>Golden Age Care</p>
                  </div>
                  <div className='ml-auto link flex flex-row lg:space-x-8 lg:px-10 space-x-3'>
                      <p onClick={() => onclickLink2()} className='cursor-pointer font-sans homelink font-medium text-gold'>Acasă</p>
                      <p onClick={() => onclickLink()}   className='cursor-pointer first-letter:font-sans servicelink font-medium text-gold'>Servicii</p>
                      <p onClick={() => onclickLink3()}  className='cursor-pointer font-sans contactlink font-medium text-gold'>Contact</p>
                      <Link to="/en"><p><Ro className='mt-1 h-4'/></p></Link>
                  </div>
              </div>
          </div>
      </div>
      <div className='space-y-32 py-48'>
      <section id="home" className=' home first space-y-32'>
        <h1 className='motto lg:px-24 text-center font-reckless text-4xl lg:text-[4rem] text-gold'>Grijă. Respect. Comunitate.</h1>
        <p className='text-gold text-[1.1rem] text-center lg:px-24 px-6'>
        Golden Age Care, un cămin de îngrijire a seniorilor întemeiat cu scopul de a proteja și îmbunătăți calitatea vieții.
        </p>
        
       { /*<img className="second" src='hero.jpg'/> */ }
        
      </section>
      </div>
      <SwipeCarousel />
      <div className='space-y-32 py-48'>
      <section className='space-y-10 gallery'>
        <h1 className='test1 lg:px-24 px-6 font-reckless text-[4rem] text-gold'>Îngrijire premium și sentimentul de Acasă</h1>
        <div>
        <CareIcon fill='#153626' className='-z-50 lg:h-64 h-32 right-1 lg:mt-0 -mt-28 lg:right-1 overflow-hidden absolute'/>
          <p className='text-gold text-[1.1rem] text-center lg:px-24 px-6'>
          În cadrul căminului de bătrâni Golden Age Care îi invităm pe rezidenții noștrii să participe într-o comunitate unde le oferim o îngrijire atentă și profesională într-o clădire nouă, construită specific să corespundă cu nevoile acestora. Ne dorim ca toți beneficiarii noștrii să se bucure de grija și respectul unui centru de îngrijire de top fară a renunța la sentimentul de “acasă”.
          </p>
        </div>
      </section>
      <section>
        <Gallery />
      </section>
      <section id="services" className='services space-y-10'>
        <h1 className='test1 lg:px-24 px-8 font-reckless text-[4rem] text-gold'>Servicii oferite</h1>
        <ServiceCard />
      </section>
      <section id="contact" className='contact space-y-16'>
        <div className='space-y-6'>
        <h1 className='test1 px-6 lg:px-24 font-reckless text-[4rem] text-gold'>Solicită o vizită</h1>
        <p className='text-medium px-6 font-sans lg:px-24 text-center text-gold text-[1.1rem]'>Nu trebuie să te lași convins de niște fotografii sau cuvinte. Vrem să iți câștigăm încrederea și te invităm să experimentezi stilul de viață pe care îl oferim în cadrul căminului Golden Age Care. Programează-te pentru o vizită completând formularul de mai jos.
Vă așteptăm cu drag.</p>
        </div>
      
        <Contact />
      </section>

      </div>
      <section className=''>
        <Footer />
      </section>
    </div>
  );
}

export default Romana;
