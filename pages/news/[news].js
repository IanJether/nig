import Businessdetails from "<nig>/components/BusinessDetails";
import Newsdetails from "<nig>/components/Newsdetails";
import { useRouter } from "next/router";




 const newsPage = () =>{ 

    const router = useRouter();
    const news = router.query.news


       return( 
          <div className='newsPage'>
               <Newsdetails title={news}/>
          </div> 
)
}
export default newsPage ;