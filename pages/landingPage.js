import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Carousel } from 'react-responsive-carousel';
import {useState,useEffect} from 'react'
import AuthRequired from '../components/AuthRequired';


const landingPage = () => {

    return (
        <AuthRequired>
        <div className="">
            <Header />
            <main className="flex flex-col-reverse md:flex-row   ">
            <div className="md:w-2/3 p-4">
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
        </AuthRequired>
    )
}

export default landingPage
