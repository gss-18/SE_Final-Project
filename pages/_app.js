import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function MyApp({ Component, pageProps }) {
  return( 
    <div>
     
    <Component {...pageProps} />
    </div>
    )
}

export default MyApp
