import "../index.css";
import Gallery from '../components/Gallery/Gallery';
import CareIcon from '../components/CareIcon/CareIcon';
import ServiceCard from '../components/ServiceCardEn/ServiceCardEn';
import { useLayoutEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';
import Logo from '../components/Logo/Logo';
import Contact from '../components/ContactEn/ContactEn';
import Footer from '../components/Footer/Footer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import En from '../components/En/En';
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
                      <p onClick={() => onclickLink2()} className='cursor-pointer font-sans homelink font-medium text-gold'>Home</p>
                      <p onClick={() => onclickLink()}   className='cursor-pointer first-letter:font-sans servicelink font-medium text-gold'>Services</p>
                      <p onClick={() => onclickLink3()}  className='cursor-pointer font-sans contactlink font-medium text-gold'>Contact Us</p>
                      <Link to="/"><p><En className='mt-1 h-4'/></p></Link>
                  </div>
              </div>
          </div>
      </div>
      <div className='space-y-32 py-48'>
      <section id="home" className='first space-y-32'>
        <h1 className='motto lg:px-24 text-center font-reckless text-4xl lg:text-[4rem] text-gold'>Attention - Respect - Community</h1>
        <p className='text-gold text-[1.1rem] text-center lg:px-24 px-6'>
        Golden Age Care, a senior care home founded with the aim of protecting and improving the quality of life.
        </p>
        <img src='hero.webp'/>
      </section>
      <section className='space-y-10 gallery'>
        <h1 className='test1 lg:px-24 px-6 font-reckless text-[4rem] text-gold'>Premium care and the feeling of a Home.</h1>
        <div>
        <CareIcon fill='#153626' className='-z-50 lg:h-64 h-32 right-1 lg:mt-0 -mt-28 lg:right-1 overflow-hidden absolute'/>
          <p className='text-gold text-[1.1rem] text-center lg:px-24 px-6'>
          At Golden Age Care Nursing Home, we invite our residents to participate in a community where we offer attentive and professional care in a new building, built specifically to meet their needs. We want all our beneficiaries to enjoy the care and respect of a top care center without giving up the feeling of "home".
          </p>
        </div>
      </section>
      <section>
        <Gallery />
      </section>
      <section id="services" className='services space-y-10'>
        <h1 className='test1 lg:px-24 px-8 font-reckless text-[4rem] text-gold'>Our Services</h1>
        <ServiceCard />
      </section>
      <section id="contact" className='contact space-y-16'>
        <div className='space-y-6'>
        <h1 className='test1 px-6 lg:px-24 font-reckless text-[4rem] text-gold'>Request a visit</h1>
        <p className='text-medium px-6 font-sans lg:px-24 text-center text-gold text-[1.1rem]'>
         
You don't have to be convinced by some photos or words. We want to earn your trust and invite you to experience the lifestyle we offer at Golden Age Care. Schedule a visit by filling out the form below.<br/>
We are eagerly waiting for you.</p>
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
