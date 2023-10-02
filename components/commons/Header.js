import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = ({ page, pageDescription, image }) => {
    return (
        <div className='Header relative flex items-center lg:justify-start h-[300px]  lg:h-[50vh] pad bg-neutral-700'>

            <h2 className="capitalize text-white mt-[40px] lg:mt-[10px] font-light text-[47px] lg:text-[60px] leading-[50px] lg:w-[60%] lg:leading-[75px]"><span className="text-primary1">{page}</span> {pageDescription} </h2>


            <div className="absolute hidden bottom-[-27px] lg:bottom-[-40px] text-neutral-600 font-semibold">
                <h4>Home <FontAwesomeIcon icon={faAngleRight} /> {page} </h4>
            </div>

        </div>
    )
}
export default Header;