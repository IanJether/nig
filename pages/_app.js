import '<nig>/styles/globals.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';

import { useEffect } from 'react'

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    Aos.init({
      duration:800,
      once: false,
    })
  },[])

  return(
    <div className="main noSelect">
      <Component {...pageProps} />
    </div>
  ) 
}



// npx tailwindcss -i ./styles/globals.css -o ./styles/output.css --watch