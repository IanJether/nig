import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faBars,
  faCircle,
  faEnvelope,
  faLocationPin,
  faPhone,
  faQuoteLeft,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { businessList } from "<nig>/data/business";
import { statsList } from "<nig>/data/stats";
import { newsList } from "<nig>/data/news";
import Footer from "./Footer";
import Image from "next/image";
import { faFacebook, faLinkedin, faTwitch, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { sustainabiltyList } from "<nig>/data/sustainable";
import { getLink } from "<nig>/data/getLink";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { aboutSliderList } from "<nig>/data/aboutSlider";
import { socialLinks } from "<nig>/data/socialsLink";



const Landing = () => {

  const [activeSlide, setActiveSlide] = useState(0)
  const [isManualSlideChange, setIsManualSlideChange] = useState(false);

  console.log(activeSlide)

  console.log('Comp rendered')


  const handleActiveSlide = (index) => {

    setIsManualSlideChange(true);
    setActiveSlide(index);

    setTimeout(() => {
      setIsManualSlideChange(false);
    }, manualChangeDelay);

  };

  const activeCard = businessList.find((items, index) => index == activeSlide)

  const intervalTime = 3000; // 2 seconds
  const manualChangeDelay = 4000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualSlideChange) {
        setActiveSlide((prevSlide) => (prevSlide + 1) % businessList.length);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [isManualSlideChange]);


  // useEffect(()=>{
  //   const interval = setInterval(handleAutoSlider, 2000)

  // },[activeSlide])





  return (
    <div className="Landing">
      {/* section one  */}

      <div className="section1 relative h-[700px] lg:h-[100vh] bg-primary1">

        {/* <Image className="h-full w-full object-cover filter brightness-[50%]" priority height={1500} width={1500} src="/images/home/home.jpg" alt="" />/ */}

        <div className="absolute hidden lg:block h-[55vh] top-[27%] right-[15%]">
          <Image className="h-full w-full object-contain" height={1000} width={1000} src="/images/banner2.svg" />
        </div>

        <div className="section1 lg:w-[56%] absolute inset-0 h-full lg:mt-[20px] flex flex-col justify-center gap-[20px] lg:gap-[25px] pad text-white">

          <div className="section11 flex gap-[10px]">
            <div className="border-t-[4px] border-orange-500 w-[40px] mt-[16px]"></div>
            <div data-aos='fade-right' data-aos-duration="200" className="text-white text-[20px]">
              <h3>Building The Nation</h3>
            </div>
          </div>

          <div data-aos='fade-right' data-aos-duration="300" className="section12 text-[32px] lg:text-[32px] leading-[36px] lg:leading-[48px] font-bold ">
            <h1> Transformation in Key Sectors Across Industries</h1>
          </div>

          <div data-aos='fade-right' data-aos-duration="400" className="section12 lg:w-[80%]  text-[16px] ">
            <h2>
              The top investment group in Aviation and Tourism, Technologies, Higher Education, Agro Solutions and Logistics.
            </h2>
          </div>

          <div className="section14 flex gap-[10px]">
            <div>
             <Link href="/about"> <button data-aos='fade-right' data-aos-duration="500" className="h-[54px] mt-[6px] bg-orange-500 hover:bg-sec2 px-[20px] rr">
                Learn more
              </button> </Link>
            </div>

            <div>
             <Link href="/businesses"> <button data-aos='fade-right' data-aos-duration="600" className="h-[54px] bg-transparent  hover:underline">
                Our Businesses{" "}
                <span className="ml-[3px] text-orange-500">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>{" "}
              </button> </Link>
            </div>



          </div>

        </div>

        <div className="absolute right-[4%] top-[0px] h-[100%] flex items-center">
          <div className="sosholanding hidden lg:flex text-white h-[350px] flex flex-col items-end justify-between">

            {socialLinks.map((items, index) => {

              return (

                <div key={index} data-aos='fade-up'
                  data-aos-duration={`${index == 0 ? "400" : index == 1 ? "600" : index == 2 ? '800' : index == 3 ? "1000" : "1200 "}`}
                  className="hover:text-red-500">
                  <span className="text-neutral-800 mr-[15px] mt-[4px] textsociallinks text-[13px] hover:text-primary1 hover:underline font-semibold"> {items.text} </span>
                  <FontAwesomeIcon icon={items.icon} />

                </div>

              )
            })}

            {/* <div data-aos='fade-up' data-aos-duration="400" className="hover:text-green-500"><FontAwesomeIcon icon={faPhone} /></div>
            <div data-aos='fade-up' data-aos-duration="600" className="hover:text-yellow-500"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div data-aos='fade-up' data-aos-duration="800" className="hover:text-green-500"><FontAwesomeIcon icon={faWhatsapp} /></div>
            <div data-aos='fade-up' data-aos-duration="1000" className="hover:text-blue-700"><FontAwesomeIcon icon={faLinkedin} /></div>
            <div data-aos='fade-up' data-aos-duration="1200" className="hover:text-red-500"><FontAwesomeIcon icon={faLocationPin} /></div> */}
          </div>
        </div>



      </div>

      {/* section two  */}

      <div data-aos="fade-up" data-aos-duration="400" className="section2 pad flex flex-col lg:flex-row lg:items-center gap-[60px] py-[40px] lg:h-screen lg:py-[100px]">

        <div className="section11 h-[300px] lg:h-[60vh] relative rr lg:w-[50%]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            className="swiper h-full w-full z-0"
          >
            {aboutSliderList.map((items, index) => {

              return (
                <SwiperSlide key={index}>
                  <Image className="h-full w-full object-cover" height={1000} width={1000} priority src={items.image} alt="kim" />
                </SwiperSlide>
              )
            })}

          </Swiper>
          {/* <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/arch.jpg" alt="kim" /> */}
          <div  className="11abs rr absolute z-10 p-[10px] bg-white flex flex-col gap-[5px] justify-center lg:items-center h-[95px] w-[70%] lg:bg-opacity-[90%] lg:h-[170px] lg:w-[190px] left-[3px] lg:right-[0px] bottom-[-40px] lg:bottom-[0px] shadow-xl">
            <div className="flex gap-[10px] items-center hidden lg:flex justify-center">
              <div className="text-primary1 text-[20px]"><FontAwesomeIcon icon={faQuoteLeft} /></div>
              <div className="text-orange-500 underline font-semibold"><p>Capt. Abera Lemi</p></div>
            </div>
            <div className=" text-black text-left"><p>"We push the limits of what is possible in investment"</p></div>
            <div className="text-orange-500 lg:hidden"><p>Capt. Abera Lemi</p></div>

          </div>
        </div>

        <div className="section12 leading-[26px] flex flex-col lg:justify-center gap-[20px] lg:gap-[30px] lg:w-[50%]">
          <div className="12title">
            <div className="font-semibold text-[28px]">
              <h2>About us</h2>
              <div className="und "></div>
            </div>
          </div>
          <div className="12head font-semibold text-[17px]">
            <h3>
              National Investment Group (NIG) is a prominent conglomerate in Ethiopia playing a major role towards nation building.
            </h3>
          </div>
          <div className="12text text-[15px] text-stone-600">
            <p>
              Led by its founder and owner, Captain Abera Lemi – a former Ethiopian Airlines Captain, NIG was incorporated as an umbrella company comprising of ten sister companies (business units). NIG's key strengths lies in its commitment to fostering innovation and embracing cutting-edge technologies.
            </p>
          </div>
          <div className="12text text-[15px] text-stone-600">
            <p>
              Our dedication to staying at the forefront of technological advancements has not only enabled NIG to remain competitive but has also allowed the company to set new industry standards. NIG is recognized as an industry pioneer, continually introducing innovative solutions and practices that redefine the landscape.
            </p>
          </div>
          <div className="12link">
           <Link href="/about"> <p className="font-semibold hover:underline cursor-pointer">
              Read more{" "}
              <span className="ml-[5px] text-orange-500">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p> </Link>
          </div>
        </div>
      </div>

      {/* section four new  */}

      <div className="sectionfour relative h-[600px] lg:h-screen  ">

        <Image className="h-full w-full object-cover" alt="kim" height={2000} width={2000} priority src="/images/banner3.jpg" />

        <div className="section41 flex flex-col justify-center gap-[40px] lg:gap-[100px] absolute inset-0 h-[100%] w-[100%] top-[0px] text-white pad py-[40px]">
          <div className="41above flex flex-col lg:justify-between lg:flex-row gap-[20px]">
            <div className="text-[28px] lg:text-[60px] font-light lg:w-[30%]"><h2>Our Vision <div className="und"></div> </h2></div>
            <div className="lg:w-[50%] lg:text-[25px] lg:font-light"><p>Being the top investment group in key sectors of Aviation and Tourism, Technologies, Higher Education, Agro Solutions and Logistics.</p></div>
          </div>
          <div className="line border-b-[2px] border-gray-300"></div>
          <div data-aos="fade-up" data-aos-duration="400" className="41below flex flex-wrap gap-[8px] justify-between">
            {statsList.map((items, index) => {

              return (
                <div key={index} className="mappedstatslist text-center font-light w-[37vw] lg:w-[9vw]">
                  <div className="text-[55px] lg:text-[80px]"><h3>{items.number}+</h3></div>
                  <div className="text-stone-300"><p>{items.name}</p></div>
                </div>
              )
            })}

          </div>
        </div>


      </div>



      <div className="section3 flex flex-col justify-center gap-[35px] lg:h-screen bg-gray-100 pad py-[45px] lg:py-[0]">

        <div className="text-[28px] lg:w-[50%] lg:mt-[-50px] font-semibold">
          <h2>Our Businesses <div className="und"></div></h2>
        </div>

        {/* the desktop screen  */}

        <div className=" lg:flex justify-between w-full hidden">

          <div className="lg:w-[30%] flex flex-col shadow-md gap-[1px]">
            {businessList.filter((items, index) => index < 4).map((items, index) => {

              const address = "/businesses/" + getLink(items.name)

              return (
                <div onClick={() => handleActiveSlide(index)} key={index} className={`mappedbusineslist cursor-pointer flex gap-[7px]
                                                px-[10px] border-b-2 h-[120px] w-full transition ease-in-out duration-300
                                                ${activeSlide === index ? 'bg-primary1 text-white' : ' bg-white '}`}>
                  <div className="w-[30%]">
                    <Image className="h-full w-full object-contain" height={500} width={500} src="/images/logo/niglogo.jpg" priority />
                  </div>
                  <div className="flex flex-col justify-center gap-[6px] w-[70%]">

                    <div className="text-[16px] font-semibold"><h2>{items.name}</h2></div>
                    <div className={`text-[15px] text-neutral-700 ${activeSlide === index ? 'text-white' : ''}`}><p>"{items.description}" </p></div>
                    <div className={`text-[10px] hover:underline hover:font-semibold ${activeSlide === index ? 'block' : 'hidden'}`}><Link href={address}><p>VIEW MORE <FontAwesomeIcon icon={faAngleRight} /></p></Link></div>
                  </div>
                </div>
              )
            })}

          </div>

          <div className="lg:w-[30%] rr overflow-hidden bg-gray-300 h-[482px] transition ease-in-out duration-300">
            <Image className="h-full w-full object-cover" alt="kim" height={1000} width={1000} priority src={activeCard.image[0].image} />

          </div>

          <div className="lg:w-[30%] flex flex-col shadow-md gap-[1px]">
            {businessList.filter((items, index) => index >= 4).map((items, index) => {

              const address = "/businesses/" + getLink(items.name)

              return (
                <div onClick={() => handleActiveSlide(index+4)} key={index} className={`mappedbusineslist cursor-pointer flex gap-[7px]
                                                px-[10px] border-b-2 h-[120px] w-full transition ease-in-out duration-300
                                                ${activeSlide === index+4 ? 'bg-primary1 text-white' : ' bg-white '}`}>
                  <div className="w-[30%]">
                    <Image className="h-full w-full object-contain" height={500} width={500} src="/images/logo/niglogo.jpg" priority />
                  </div>
                  <div className="flex flex-col justify-center gap-[6px] w-[70%]">

                    <div className="text-[16px] font-semibold"><h2>{items.name}</h2></div>
                    <div className={`text-[15px] text-neutral-700 ${activeSlide === index+4 ? 'text-white' : ''}`}><p>"{items.description}" </p></div>
                    <div className={`text-[10px] hover:underline hover:font-semibold ${activeSlide === index+4 ? 'block' : 'hidden'}`}><Link href={address}><p>VIEW MORE <FontAwesomeIcon icon={faAngleRight} /></p></Link></div>
                  </div>
                </div>
              )
            })}

          </div>



        </div>

        {/* the mobile screen  */}

        <div className="pb-[40px] lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop
          >
            {businessList.map((items, index) => {

              const address = "/businesses/" + getLink(items.name)

              return (
                <SwiperSlide key={index} className="mappedmobilebusiness">
                  <div className="flex flex-col gap-[17px]">
                    <div className="flex flex-col gap-[5px] h-[68px]">
                      <div className="text-[17px] leading-[25px] font-semibold"><h2>{items.name}</h2></div>
                      <div className="font-light text-[14px]"><h3>"{items.description}"</h3></div>
                      {/* <div className="text-[12px] text-primary1"><Link href={address}>VIEW MORE</Link></div> */}
                    </div>
                    <div className="h-[300px] shadow-xl">
                      <Image className="h-full rr shadow-md w-full object-cover" height={1000} width={1000}  src={activeCard.image[0].image} alt="kim" priority />
                    </div>
                    <div><Link href={address}><button className="h-[54px] bg-orange-500 hover:bg-sec2 font-semibold px-[20px] rr text-white">View more</button></Link></div>
                  </div>

                </SwiperSlide>
              )
            })}
          </Swiper>

        </div>

      </div>



      {/* section six  */}

      <div className="sectionsix h-[770px] lg:h-[100vh] relative">

        <Image className="h-full w-full object-cover filter brightness-[54%]" priority height={1500} width={1500} src="/images/home/land.jpg" alt="" />

        <div className="h-full w-[98vw] absolute lg:mt-[30px] inset-0 flex gap-[30px] flex-col lg:flex-row lg:items-center justify-center pad text-white">
          <div className="flex flex-col gap-[23px] lg:gap-[35px] lg:w-[40%] lg:h-[300px]">

            <div className="text-[14px] font-semibold"><h3>Sustainability</h3></div>
            <div className="text-[32px] font-bold leading-[35px]"><h2>Building prosperity & self-sufficiency</h2></div>
            <div className="text-[16px] f leading-[22px]"><p>At NIG, our commitment to sustainability extends beyond mere adherence to regulatory requirements. Our motivation is rooted in a strong determination to make meaningful contributions and create a positive influence on the growth and well-being of our host communities and society as a whole.</p></div>
            <div className="font-semibold hover:underline hover:text-orange-500 text-[14px]"> <Link href="/sustainability"><p>Read More <span className="text-orange-500"><FontAwesomeIcon icon={faArrowRight} /></span></p></Link> </div>

          </div>
          <div className="hidden lg:block"></div>
          <div className="flex flex-col gap-[10px] lg:gap-[35px] lg:w-[30%] lg:h-[300px]">
            <div className="uppercase font-semibold text-[14px]"><p>7 Sustainability Pillars</p></div>
            <div className="flex flex-wrap justify-between lg:justify-start gap-[20px]">
              {sustainabiltyList.filter((items, index) => index < 4).map((items, index) => {

                return (
                  <div key={index} className="mappedsustainability flex flex-col w-[55px] lg:w-[70px] gap-[5px]">
                    <div className="flex items-center justify-center border rr h-[50px] w-[60px]"><FontAwesomeIcon icon={items.icon} /></div>
                    <div className="uppercase font-semibold text-center text-[10px]"><p>{items.title}</p></div>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-wrap justify-between lg:justify-start gap-[20px]">
              {sustainabiltyList.filter((items, index) => index >= 4).map((items, index) => {

                return (
                  <div key={index} className="mappedsustainability flex flex-col w-[55px] lg:w-[70px] gap-[5px]">
                    <div className="flex items-center justify-center border rr h-[50px] w-[60px]"><FontAwesomeIcon icon={items.icon} /></div>
                    <div className="uppercase font-semibold text-center text-[10px]"><p>{items.title}</p></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Navbar />
    </div>
  );
};
export default Landing;
