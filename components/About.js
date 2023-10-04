import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./commons/Header";
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { statsList } from "<nig>/data/stats";
import { teamList } from "<nig>/data/team";
import { partnersList } from "<nig>/data/partners";
import pic1 from "../public/images/New/build.jpg";


const About = () => {
  return (
    <div className='About'>

      <Header image={pic1} page="Who We Are" pageDescription="as an investment firm" />


      {/* section one  */}

      <div data-aos="fade-up" data-aos-duration="400" className="section2 pad flex flex-col lg:flex-row-reverse lg:items-center gap-[40px] py-[40px] lg:h-screen lg:py-[100px]">

        <div className="section11 h-[300px] lg:h-[55vh] relative rr lg:w-[50%]">

          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/arch.jpg" alt="kim" />
          <div className="11abs absolute z-10 p-[10px] rr bg-white flex flex-col gap-[5px] justify-center items-center h-[170px] w-[180px] right-[0px] bottom-[0px] shadow-xl">
            <div className="flex gap-[10px] items-center justify-center">
              <div className="text-primary1 text-[20px]"><FontAwesomeIcon icon={faQuoteLeft} /></div>
              <div className="text-orange-500 underline font-semibold"><p>Cpt Abera Lemi</p></div>
            </div>
            <div className="font-semibold"><p>Building Ethiopia, one industry at a time</p></div>

          </div>
        </div>

        <div className="section12 leading-[26px] flex flex-col lg:justify-center gap-[20px] lg:gap-[30px] lg:w-[50%]">
          <div className="12title">
            <div className="font-semibold text-[28px]">
              <h2>Who We Are</h2>
              <div className="und "></div>
            </div>
          </div>
          <div className="12head font-semibold text-[17px]">
            <h3>
              National Investment Group (NIG) is a prominent Ethiopian conglomerate, actively contributing to the nation's development.
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

      <div className="sectionfour relative h-[750px] lg:h-screen  ">

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

      {/* section three - Team

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
                  <div className="text-[30px] font-light"><h2>Ian John </h2></div>
                  <div className="text-[14px]"><h4>Chief Executive Officer</h4></div>
                </div>

              </div>
            )
          })}

        </div>


      </div> */}

      {/* section five - message from the ceo  */}


      <div className="sectionfiveabout flex flex-col gap-[40px] py-[40px] lg:py-[120px] pad">

        <div className="text-[28px] font-semibold">
          <h2>Message from the CEO <div className="und"></div></h2>
        </div>

        <div className="ceo w-full rr overflow-hidden h-[400px] lg:h-[60vh] mb-[40px] relative">
          <Image className="h-full rr w-full object-cover filter brightness-[100%]" height={1500} width={1500} src="/images/New/ceo2.jpg" priority />

          <div className="ceotext text-white px-[10px] rr flex flex-col gap-[25px] items-center justify-center text-center absolute bg-black bg-opacity-[60%] top-[10%] left-[10%] lg:left-[6%] h-[80%] w-[80%] lg:w-[30%] ">
            <div className="text-[20px] font-semibold"><p>"
              Inspired to pioneer excellence and innovation, we're shaping a brighter future through unwavering dedication to growth and transformation."</p></div>
            <div className="text-[25px] font-light">
              <div>  <h2>Cpt Abera Lemi</h2></div>
              <div className="text-primary2 text-[14px] font-semibold">Founder and CEO</div>

            </div>

          </div>

        </div>

      </div>

      {/* section four - partners  */}

      <div className="sectionfourpartners relative h-[500px] lg:h-screen ">
        <Image className="h-full w-full object-cover filter brightness-[65%]" height={1000} width={1000} src="/images/home/home.jpg" priority />

        <div className="pad flex flex-col justify-center gap-[45px] absolute top-[0px] w-full h-full inset-0 text-white py-[40px]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[28px] font-semibold"><h3>Our Partners <div className="und"></div></h3></div>
            <div className="lg:w-[60%]"><p>We're proud to partner with key organizations, offering sustainable solutions and representing Ethiopia in leading investments.</p></div>
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