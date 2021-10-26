import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
function MyApp({ Component, pageProps }) {
  return( 
    <div>
     
    <Component {...pageProps} />
    </div>
    )
}

export default MyApp
