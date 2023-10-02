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
    <div className='ContactComp'>
      <Header image={pic} page="Contact us" pageDescription="for any inquiries" />

      {/* section one  */}

      <div className="sectiononecontact flex flex-col lg:flex-row lg:justify-between gap-[30px] py-[40px] lg:py-[100px] pad">
        <div className="cc">
          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/home.jpg" />
        </div>
        <div className="cc overflow-hidden">
          <iframe className="h-full w-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.503167514216!2d38.79848387420257!3d9.01777948916619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859eaf6a53a5%3A0x7717d41abd5534ec!2sPrivate%20Organizations%20Employees&#39;%20Social%20Security%20Administration%20Caf%C3%A9!5e0!3m2!1sen!2ske!4v1696280932547!5m2!1sen!2ske" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className="cc relative">
          <Image className="h-full w-full object-cover" height={1000} width={1000} priority src="/images/home/home.jpg" />
          <div className="ccmapped h-full w-full absolute px-[20px] text-white flex flex-col gap-[15px] text-[16px] justify-center top-[0px] inset-0 bg-primary1 bg-opacity-[70%]">
            <div className="text-[24px] font-semibold"><h2>Contact Details</h2></div>
            <div className="flex gap-[10px] ">
              <div className="w-[20px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faPhone} /></div>
              <div className="hover:text-primary1 hover:underline font-semibold"><p>+252-911-201-722</p></div>
            </div>
            <div className="flex gap-[10px]">
              <div className="w-[20px] text-[18px] text-orange-500"><FontAwesomeIcon icon={faEnvelope} /></div>
              <div className="hover:text-primary1 hover:underline font-semibold"><p>info@nationalinvestmentgoup.net</p></div>
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

        </div>
      </div>

      {/* section two  */}

      <div className="sectiontwocontact flex flex-col lg:flex-row gap-[40px] py-[40px] lg:pb-[100px] pad">

        <div className="contactform flex flex-col gap-[20px] lg:w-[60%]">
          <h2 className="text-[28px] font-semibold">Contact Form <div className="und"></div></h2>
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
            <textarea className="h-[130px] w-full bg-gray-100 rr border border-gray-200 mt-[5px] p-[10px]" placeholder="Optional" type="text" />
          </div>
          <div><button className="bg-orange-500 uppercase text-[13px] hover:bg-sec2 h-[55px] rr text-white font-semibold px-[20px]">Submit</button></div>

        </div>

        <div className="contactpeople flex flex-col gap-[30px] lg:w-[40%]">

          <div className="text-[28px] font-semibold lg:mb-[19px]"><h2>Contact people <div className="und"></div></h2></div>
         
          {contactPersonList.map((items,index)=>{

            return(
              <div className="mappedcontactpeople flex gap-[10px]">
                <div className="w-[110px] h-[110px] bg-gray-100">

                </div>
                <div className="flex flex-col gap-[3px]">
                  <div className="text-[14px] font-semibold"><h4>Ian John</h4></div>
                  <div className="text-[15px] font-bold"><h3>Head of communication</h3></div>
                  <div className="text-[15px] text-neutral-700"><p>Email : ian@nig.com</p></div>
                  <div className="text-[15px] text-neutral-700"><p>phone: +252-7-123-456-789</p></div>

                </div>
              </div>
            )
          })}
        </div>

      </div>


      <Footer />
      <Navbar />

    </div>
  )
}
export default ContactComp;