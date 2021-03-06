import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Carousel } from 'react-responsive-carousel';
import {useState,useEffect} from 'react'
import AuthRequired from '../components/AuthRequired';


const landingPage = () => {
    const renderCustomThumbs = () => {
        return [
            <picture>
              <source data-srcSet="/bitd.jpg" type="image/jpg" />
              <img
                key="01"
                src="bitd.jpg"
                alt="First Thumbnail"
                height="70"
              />
            </picture>,
            <picture>
            <source data-srcSet="/boysh.jpg" type="image/jpg" />
            <img
              key="02"
              src="boysh.jpg"
              alt="Second Thumbnail"
              height="70"
            />
          </picture>,
          <picture>
          <source data-srcSet="/girlsh.jpeg" type="image/jpeg" />
          <img
            key="03"
            src="girlsh.jpeg"
            alt="Third Thumbnail"
            height="70"
          />
        </picture>,
        <picture>
        <source data-srcSet="/cs.jfif" type="image/jfif" />
        <img
          key="04"
          src="cs.jfif"
          alt="Fourth Thumbnail"
          height="70"
        />
      </picture>,
          ]
    }

    return (
        <AuthRequired>
        <div className="">
            <Header />
            <main className="flex flex-col-reverse md:flex-row   ">
            <div className="md:w-2/3 p-4">
                    <Carousel showThumbs={true} showArrows={true} renderThumbs={renderCustomThumbs} infiniteLoop={true} > 
                    
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
