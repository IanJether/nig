import Businessdetails from "<nig>/components/BusinessDetails";
import { useRouter } from "next/router";




 const businessPage = () =>{ 

    const router = useRouter();
    const name = router.query.name


       return( 
          <div className='businessPage'>
                <Businessdetails name={name}/>
          </div> 
)
}
export default businessPage ;