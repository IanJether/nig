import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


 const ContactPrompt = () =>{ 
       return( 
        <div className="sectionthreebusiness flex flex-col lg:flex-row lg:justify-between lg:items-center justify-center gap-[20px] pad h-[300px] lg:h-[140px] bg-primary1">
        <div className="text-white text-[30px] font-light"><h3>Any Inquiry for Us or any of our holding businesses ?</h3></div>
        <div> 
            <Link href="/contact"> <button className="h-[54px] bg-orange-500 hover:bg-sec2 font-semibold px-[20px] rr text-white">Contact us <FontAwesomeIcon className="ml-[10px]" icon={faArrowRight} /> </button>  </Link>
        </div>

    </div>
)
}
export default ContactPrompt ;