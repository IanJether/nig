import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./commons/Header";
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { statsList } from "<nig>/data/stats";
import { teamList } from "<nig>/data/team";
import { partnersList } from "<nig>/data/partners";


const About = () => {
  return (
    <div className='About'>

      <Header page="Who We Are" pageDescription="as an investment firm" />


      {/* section one  */}

      <div data-aos="fade-up" data-aos-duration="400" className="section2 pad flex flex-col lg:flex-row-reverse gap-[40px] py-[40px] lg:py-[100px]">

        <div className="section11 bg-gray-500 shadow-md h-[300px] lg:h-[60vh] relative rr lg:w-[50%]">
          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/arch.jpg" alt="" />
          {/* <div className="11abs absolute rr bg-white h-[70px] w-[70px] lg:w-[100px] left-[2px] top-[20%] shadow-md"></div> */}
          {/* <div className="11abs absolute rr bg-white h-[70px] w-[70px] lg:w-[100px] right-[10%] top-[1%] shadow-md"></div> */}
          <div className="11abs absolute p-[10px] rr bg-white flex flex-col gap-[5px] justify-center items-center h-[170px] w-[170px] right-[0px] bottom-[0px] shadow-xl">
            <div className="flex gap-[10px] items-center justify-center">
              <div className="text-primary1 text-[20px]"><FontAwesomeIcon icon={faQuoteLeft} /></div>
              <div className="text-orange-500 underline font-semibold"><p>Cpt Abera Lemi</p></div>
            </div>
            <div className="font-semibold"><p>Building our nation, Ethiopia,  one Industry at a time</p></div>

          </div>
        </div>

        <div className="section12 leading-[26px] flex flex-col lg:justify-center gap-[20px] lg:gap-[30px] lg:w-[50%]">
          <div className="12title">
            <div className="font-semibold text-[28px]">
              <h2>Who we are</h2>
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
              Led by its founder and owner, Captain Abera Lemi – a former Ethiopian Airlines Captain, NIG was incorporated as an umbrella company comprising of ten sister companies (business units) which operate across various sectors such as Aviation & Tourism, Technologies, Higher Education, Agro-Solutions, logistics & transportation, and General Trading.
            </p>
          </div>
          <div className="12text text-[15px] text-stone-600">
            <p>
              Led by its founder and owner, Captain Abera Lemi – a former Ethiopian Airlines Captain, NIG was incorporated as an umbrella company comprising of ten sister companies (business units) which operate across various sectors such as Aviation & Tourism, Technologies, Higher Education, Agro-Solutions, logistics & transportation, and General Trading.
            </p>
          </div>
          {/* <div className="12link">
            <p className="font-semibold hover:underline cursor-pointer">
              Read more{" "}
              <span className="ml-[5px] text-orange-500">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </p>
          </div> */}
        </div>
      </div>

      {/* section two  */}

      <div className="sectionfour relative h-[750px] lg:h-[800px]  ">

        <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/slide.png" />

        <div className="section41 flex flex-col justify-center gap-[40px] lg:gap-[50px] absolute inset-0 bg-primary1 bg-opacity-[94%] h-[100%] w-[100%] top-[0px] text-white pad py-[40px]">
          <div className="41above flex flex-col lg:justify-between lg:flex-row gap-[20px]">
            <div className="text-[28px] lg:text-[40px] font-light lg:w-[30%]"><h2>Our Vision <div className="und"></div> </h2></div>
            <div className="lg:w-[50%] lg:text-[23px] lg:font-light"><p>Being the top investment group in key sectors of Aviation and Tourism, Technologies, Higher Education, Agro Solutions and Logistics.</p></div>
          </div>
          <div className="41above flex flex-col lg:justify-between lg:flex-row gap-[20px]">
            <div className="text-[28px] lg:text-[40px] font-light lg:w-[30%]"><h2>Our Mission <div className="und"></div> </h2></div>
            <div className="lg:w-[50%] lg:text-[23px] lg:font-light"><p>To excel as the foremost investment group, driving innovation and growth in pivotal sectors such as Aviation and Tourism, Technologies, Higher Education, Agro Solutions, and Logistics.</p></div>
          </div>
          <div className="line border-b-[2px] border-gray-300"></div>
          <div data-aos="fade-up" data-aos-duration="400" className="41below flex flex-wrap gap-[8px] justify-between">
            {statsList.map((items, index) => {

              return (
                <div className="mappedstatslist text-center font-light w-[37vw] lg:w-[9vw]">
                  <div className="text-[60px] lg:text-[80px]"><h3>{items.number}+</h3></div>
                  <div className="text-stone-300"><p>{items.name}</p></div>
                </div>
              )
            })}

          </div>
        </div>


      </div>

      {/* section three - Team */}

      <div className="sectionthree pad py-[40px] lg:py-[100px] flex flex-col gap-[40px]">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-[20px]">
          <div>
            <div className="font-semibold text-primary1 text-[16px]"><h3>Our Lead Team</h3></div>
            <div className="font-semibold text-[28px]"><h2>Meet Our Top Executives <div className="und"></div> </h2></div>
          </div>
          <div>
            <button className="h-[54px] bg-orange-500 hover:bg-sec2 font-semibold px-[20px] rr text-white">View Team</button>
          </div>

        </div>

        <div className="flex flex-wrap gap-[30px] justify-center lg:justify-between">
          {teamList.map((items, index) => {

            return (
              <div className="mappedteamlist h-[350px] lg:h-[50vh] rr w-[75vw] lg:w-[17vw] relative">
                <div className="h-full w-full overflow-hidden bg-gray-600">

                </div>
                <div className="absolute rr flex flex-col items-center justify-center bottom-[0px] h-[100px] w-[90%] left-[5%] bg-primary1 text-white bg-opacity-[70%]">
                  <div className="text-[30px] font-light"><h2>Juma Osman </h2></div>
                  <div className="text-[14px]"><h4>Chief Executive Officer</h4></div>
                </div>

              </div>
            )
          })}

        </div>


      </div>

      {/* section four - partners  */}

      <div className="sectionfourpartners relative h-[500px] lg:h-[80vh] ">
        <Image className="h-full w-full object-cover filter brightness-[65%]" height={1000} width={1000} src="/images/home/home.jpg" priority />

        <div className="pad flex flex-col justify-center gap-[45px] absolute top-[0px] w-full h-full inset-0 text-white py-[40px]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[28px] font-semibold"><h3>Our Partners <div className="und"></div></h3></div>
            <div className="lg:w-[60%]"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi saepe numquam, placeat, sunt adipisci facilis eaque ducimus incidunt illum!</p></div>
          </div>
          <div className="lg:hidden ">
            {partnersList.filter((items, index) => index == 0).map((items, index) => {

              return (
                <div key={index} className="mappedpartnerslist bg-gray-100 bg-opacity-[66%] rr h-[150px] flex items-center justify-center">
                  <Image className="h-full w-full object-contain" height={400} width={400} priority src={items.logo} />
                </div>
              )
            })}
          </div>
          <div className="hidden lg:flex justify-between gap-[10px]">
            {partnersList.map((items, index) => {

              return (
                <div key={index} className="mappedpartnerslist bg-gray-100 bg-opacity-[70%] px-[6px] rr h-[140px] w-[14vw] flex items-center justify-center">
                  <Image className="h-full w-full object-contain" height={400} width={400} priority src={items.logo} />
                </div>
              )
            })}
          </div>

        </div>

      </div>




      <Footer />
      <Navbar />

    </div>
  )
}
export default About;