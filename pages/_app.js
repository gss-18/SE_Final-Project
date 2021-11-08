import 'tailwindcss/tailwind.css'
import Header from '../components/ContactHeader'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  return( 
    <div>
     <Header />
     
    <Component {...pageProps} />
    </div>
    )
}

export default MyApp
