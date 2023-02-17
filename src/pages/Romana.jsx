import logo from '../logo.svg';
import "../index.css";
import Gallery from '../components/Gallery/Gallery';
import CareIcon from '../components/CareIcon/CareIcon';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { ReactLenis } from '@studio-freight/react-lenis';
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
     
  }

  )
  return (
    <div className="App" ref={ref}>
      <div className='fixed z-40 w-full'>
        <div className=" mt-4 headertop lg:px-9 px-2 justify-center ">
              <div className="p-4 w-full header lg:rounded-[30px] rounded-[25px] border-2 border-opacity-10 items-center flex flex-row bg-pine bg-opacity-40 backdrop-blur-lg border-white">
                  <div>
                      <Logo className="px-6 lg:px-10 h-16"/>
                  </div>
                  <div className='ml-auto flex flex-row lg:space-x-8 lg:px-10 space-x-3'>
                      <p onClick={() => onclickLink2()} className='cursor-pointer font-sans homelink font-medium text-gold'>Acasă</p>
                      <p onClick={() => onclickLink()}   className='cursor-pointer first-letter:font-sans servicelink font-medium text-gold'>Servicii</p>
                      <p onClick={() => onclickLink3()}  className='cursor-pointer font-sans contactlink font-medium text-gold'>Contact</p>
                      <Link to="/en"><p><Ro className='mt-1 h-4'/></p></Link>
                  </div>
              </div>
          </div>
      </div>
      <div className='space-y-32 py-48'>
      <section id="home" className='first space-y-32'>
        <h1 className='motto lg:px-24 text-center font-reckless text-4xl lg:text-[4rem] text-gold'>Atenție. Respect. Siguranță.</h1>
        <img src='hero.webp'/>
      </section>
      <section className='space-y-10 gallery'>
        <h1 className='test1 lg:px-24 px-6 font-reckless text-[4rem] text-gold'>Îngrijire medicală premium și sentimentul de Acasă</h1>
        <div>
        <CareIcon fill='#153626' className='-z-50 lg:h-64 h-32 right-1 lg:mt-0 -mt-28 lg:right-1 overflow-hidden absolute'/>
          <p className='text-gold text-[1.1rem] text-center lg:px-24 px-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus nisi a euismod finibus. Praesent nec viverra libero, ut tincidunt orci. Ut imperdiet dictum dui, imperdiet maximus magna iaculis non. Suspendisse vestibulum dolor pharetra bibendum feugiat. Suspendisse viverra quis libero ut lobortis. Proin malesuada tempus gravida. Morbi fringilla iaculis ligula.
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
        <p className='text-medium px-6 font-sans lg:px-24 text-center text-gold text-[1.1rem]'>Știm că alegerea unui cămin de bătrâni este o decizie grea. De aceea, înainte de a vă cere să ne acordați încrederea dumneavoastră, vă invităm să ne vizitați, pentru a ne cunoaște și pentru a experimenta direct stilul de viață Golden Age Care. Completați formularul de mai jos și vă vom contacta în cel mai scurt timp pentru a programa vizionarea la căminul de bătrâni din Săcălaz.
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
