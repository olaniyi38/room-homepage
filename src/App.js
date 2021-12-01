import {Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Header from "./components/Header"
import Button from './components/Button'
import { useEffect, useRef,useState } from 'react'

//images
import desktopImage1 from './assets/images/desktop-image-hero-1.jpg'
import mobileImage1 from './assets/images/mobile-image-hero-1.jpg'
import desktopImage2 from './assets/images/desktop-image-hero-2.jpg'
import mobileImage2 from './assets/images/mobile-image-hero-2.jpg'
import desktopImage3 from './assets/images/desktop-image-hero-3.jpg'
import mobileImage3 from './assets/images/mobile-image-hero-3.jpg'
import imgDark from './assets/images/image-about-dark.jpg'
import imgLight from './assets/images/image-about-light.jpg'
import angleLeftSvg from './assets/images/icon-angle-left.svg'
import angleRightSvg from './assets/images/icon-angle-right.svg'


SwiperCore.use([Navigation,Pagination,EffectFade])

const App = () => {
  
  gsap.registerPlugin(ScrollTrigger)
  
  const [isMobileScreen,setMobileScreen] = useState(false)
  const [sideMenuActive,setSideMenuActive] = useState(false)
 
  let tl1 =gsap.timeline()
  let tl2 = gsap.timeline()
  const checkScreenWidth=()=>{
    let width = window.innerWidth
    console.log(width)
    if(width <= 375){
      setMobileScreen(true)
    }else{
      setMobileScreen(false)
    }
   } 

    useEffect(() => {
    tl1.to('main .pitch .cta',{
      delay:.5,
      visibility:'visible'
    })
    .from('.pitch .cta .title',{
      duration:2,
      opacity:0,
      x:20
    },'-=1').from('.pitch .cta p',{
      duration:2,
      x:-20,
      opacity:0
    },'-=1')
    .to('.pitch img ',{
      duration:1,
      transform:'scale(1)',
      filter:'blur(0px)'
    })
    .from('.pitch .cta button',{
      duration:1,
      opacity:0, 
    })

    tl2.to('.about img',{
      duration:1,
      transform:'scale(1)',
      filter:'blur(0px)',
      scrollTrigger:{
        trigger:'.about .image',
        start:'top center',
        
      }
    }).from('.about .text p',{
      duration:1,
      y:20,
      scrollTrigger:{
        trigger:'.about .text',
        start:'top center',

      }
    })
    window.addEventListener('DOMContentLoaded',()=>{
      checkScreenWidth()
    })        
    }, [])
  
    window.addEventListener('resize',()=>{
      checkScreenWidth()
    })
  

  const  navPrev = useRef(null)
  const  navNext = useRef(null)

  const toggleDarkBg=()=>{
    setSideMenuActive(!sideMenuActive)
  }

 return (
<>
  <Header activeDarkBg={toggleDarkBg} />
  <main>
    
    <section className="pitch">
      <Swiper navigation={{
         prevEl: navPrev.current,
         nextEl:navNext.current,
         'clickable' : true 
        }} onBeforeInit={ (swiper)=>{
        swiper.params.navigation.prevEl = navPrev.current
        swiper.params.navigation.nextEl = navNext.current
        }
        }
        effect="fade">
        <SwiperSlide className='slide'>

          <div className="img">
            <img src={isMobileScreen ? mobileImage1 : desktopImage1 } alt="" />
          </div>

          <div className="cta">
            <span className="title"> Discover innovative ways to decorate</span>
            <p>
              We provide unmatched quality, comfort, and style for property owners across the country.
              Our experts combine form and function in bringing your vision to life. Create a room in your
              own style with our collection and make your property a reflection of you and what you love.
            </p>

            <Button text='Shop now' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="img">
            <img src={isMobileScreen ? mobileImage2 : desktopImage2 } alt="" />
          </div>

          <div className="cta">
            <span className="title">We are available all across the globe</span>

            <p>
              With stores all over the world, it's easy for you to find furniture for your home or place of business.
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
              store locator. Any questions? Don't hesitate to contact us today.
            </p>

            <Button text='Shop now' />

          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="img">
            <img src={isMobileScreen ? mobileImage3 : desktopImage3} alt="" />

          </div>
          <div className="cta">
            <span className="title">Manufactured with the best materials</span>

            <p>
              Our modern furniture store provide a high level of quality. Our company has invested in advanced
              technology
              to ensure that every product is made as perfect and as consistent as possible. With three decades of
              experience in this industry, we understand what customers want for their home and office.
            </p>

            <Button text='Shop now' />


          </div>
        </SwiperSlide>
        <div className="carousel-control">
          <div ref={navPrev}> <img src={angleLeftSvg} alt="" /> </div>
          <div ref={navNext}><img src={angleRightSvg} alt="" /> </div>
        </div>
      </Swiper>
    </section>

    <section className="about">
      <div className="image">
        <img src={imgDark} alt="" />
      </div>
      <div className="text">
        <h5 className="title">About our furniture</h5>

        <p>
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.
        </p>

      </div>
      <div className="image">
        <img src={imgLight} alt="" />
      </div>
    </section>
  </main>
</>
)
}












export default App