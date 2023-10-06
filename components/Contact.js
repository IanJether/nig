import { NavbarList } from "<nig>/data/navList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./commons/Header";
import pic from "../public/images/home/home.jpg"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { contactPersonList } from "<nig>/data/contactPeople";


const ContactComp = () => {
  return (
    <div className='ContactComp bg-stone-100'>
      <Header image={pic} page="Contact us" pageDescription="for any inquiries" />

      {/* section one  */}

     

      {/* section two  */}

      <div className="sectiontwocontact flex flex-col lg:flex-row gap-[40px] py-[40px] lg:py-[100px] pad ">

        <div className="flex flex-col-reverse bg-white lg:flex-row-reverse lg:w-[79vw] gap-[20px] shadow-xl">



          <div className="contactform flex flex-col lg:w-[50%] gap-[20px]   px-[15px] py-[30px]">
            <h2 className="text-[28px] font-semibol">Contact Form <div className="und"></div></h2>

            <div className="flex flex-col gap-[20px]">


              <div>
                <label htmlFor="">Name</label>
                <input className="inp" type="text" />
              </div>
              <div>
                <label htmlFor="">E-mail</label>
                <input className="inp" type="text" />
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input className="inp" type="text" />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea className="h-[100px] w-full focus:bg-gray-100 rr border-b-2 border-gray-200 mt-[5px] p-[10px] outline-none focus:border-b focus:border-primary1" placeholder="Optional" type="text" />
              </div>
              <div><button className="bg-orange-500 uppercase text-[13px] hover:bg-sec2 h-[55px] rr text-white font-semibold px-[20px]">Submit</button></div>
            </div>

          </div>



          <div className="h-[380px] lg:h-[608px] lg:full lg:w-[50%] relative overflow-hidden">
            {/* <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/contact/possea.jpg" /> */}
            <div className="ccmapped  h-full w-full absolute px-[20px] text-white flex flex-col gap-[25px] text-[16px] justify-center lg:justify-start top-[0px] inset-0 bg-primary1">
              <div className="text-[24px] lg:mt-[37px]"><h2>Contact Details <div className="und"></div> </h2></div>
              <div className="flex gap-[10px] lg:mt-[20px]">
                <div className="w-[20px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faPhone} /></div>
                <div className="hover:text-black hover:underline "><p>+252-911-201-722</p></div>
              </div>
              <div className="flex gap-[10px] z-10">
                <div className="w-[25px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="hover:text-black hover:underline "><p>info@nationalinvestmentgoup.com</p></div>
              </div>
              <div className="flex z-10 gap-[10px]">
                <div className="w-[24px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faLocationPin} /></div>
                <div className="hover:text-black hover:underline"><p>Addis Ababa, Ethiopia ,Megnagna POSSEA Building 3rd floor</p></div>
              </div>
              <div className="flex lg:absolute lg:bottom-[15px] z-10 justify-self-end soshobox gap-[20px] lg:gap-[30px] text-[28px] text-white">
                <div><FontAwesomeIcon icon={faFacebook} /></div>
                <div><FontAwesomeIcon icon={faInstagram} /></div>
                <div><FontAwesomeIcon icon={faTwitter} /></div>
                <div><FontAwesomeIcon icon={faLinkedin} /></div>
              </div>

            </div>

            <div className="absolute bottom-[-170px] right-[-150px] bg-primary2 h-[370px] w-[370px] rounded-full">

            </div>

            <div className="absolute h-[200px] w-[200px] rounded-full bg-teal-300 bg-opacity-[80%] z-0 bottom-[45px] right-[80px]">

            </div>

          </div>

        </div>

      </div>


      <div className="h-[550px] lg:h-[700px] pad shadow-xl pb-[40px] lg:pb-[100px] overflow-hidden">
          <iframe className="w-full h-full" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.503167514216!2d38.79848387420257!3d9.01777948916619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859eaf6a53a5%3A0x7717d41abd5534ec!2sPrivate%20Organizations%20Employees&#39;%20Social%20Security%20Administration%20Caf%C3%A9!5e0!3m2!1sen!2ske!4v1696280932547!5m2!1sen!2ske" 
          width="300" 
          height="450" 
          style={{ border: "0" }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

      {/* <div className="sectiononecontact flex flex-col lg:flex-row lg:justify-between gap-[30px] "> */}
        {/* <div className="cc">
          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/contact/possea3.jpg" />
        </div> */}
        {/* <div className="h-[500px] shadow-xl overflow-hidden">
          <iframe className="h-full w-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.503167514216!2d38.79848387420257!3d9.01777948916619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859eaf6a53a5%3A0x7717d41abd5534ec!2sPrivate%20Organizations%20Employees&#39;%20Social%20Security%20Administration%20Caf%C3%A9!5e0!3m2!1sen!2ske!4v1696280932547!5m2!1sen!2ske" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div> */}
        {/* <div className="cc relative">
          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/contact/possea.jpg" />
          <div className="ccmapped h-full w-full absolute px-[20px] text-white flex flex-col gap-[15px] text-[16px] justify-center top-[0px] inset-0 bg-primary1 bg-opacity-[70%]">
            <div className="text-[24px] font-semibold"><h2>Contact Details</h2></div>
            <div className="flex gap-[10px] ">
              <div className="w-[20px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faPhone} /></div>
              <div className="hover:text-primary1 hover:underline font-semibold"><p>+252-911-201-722</p></div>
            </div>
            <div className="flex gap-[10px]">
              <div className="w-[20px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faEnvelope} /></div>
              <div className="hover:text-primary1 hover:underline font-semibold"><p>info@nationalinvestmentgoup.com</p></div>
            </div>
            <div className="flex gap-[10px]">
              <div className="w-[24px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faLocationPin} /></div>
              <div className="hover:text-primary1 hover:underline font-semibold"><p>Addis Ababa, Ethiopia ,Megnagna POSSEA Building 3rd floor</p></div>
            </div>
            <div className="flex soshobox gap-[20px] lg:gap-[30px] text-[28px] text-white">
              <div><FontAwesomeIcon icon={faFacebook} /></div>
              <div><FontAwesomeIcon icon={faInstagram} /></div>
              <div><FontAwesomeIcon icon={faTwitter} /></div>
              <div><FontAwesomeIcon icon={faLinkedin} /></div>
            </div>

          </div>

        </div> */}
      {/* </div> */}


      <Footer />
      <Navbar />

    </div>
  )
}
export default ContactComp;