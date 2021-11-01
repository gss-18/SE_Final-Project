import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Carousel } from 'react-responsive-carousel';

const landingPage = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 min-h-screen">
            <Header />
            <main className="flex flex-col-reverse md:flex-row ">
            <div className="md:w-2/3 ">
                    <Carousel showThumbs={true} > 
                    
                    <div>
                    <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="bitd.jpg" alt="Smile :)"></img>
                    
                         </div>
                <div>
                    <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="boysh.jpg" alt="Smile :)"></img>
                    
                </div>
                <div>
                    <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="girlsh.jpeg" alt="Smile :)"></img>
                    
                </div>
                <div>
                    <img className="md:h-22 md:w-auto md:px-24 h-auto w-auto " src="cs.jfif" alt="Smile :)"></img>
                    
                </div>
            
                </Carousel>
            </div>
            <SideNav className="flex"/>
            </main>
        </div>
    )
}

export default landingPage
