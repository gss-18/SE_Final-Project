import AuthRequired from '../components/AuthRequired';
import ClubsHeader from '../components/clubsHeader'
import { Carousel } from 'react-responsive-carousel';

const tpo = () => {
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
        <div>
            <ClubsHeader className="" text="DashBoard" link="/landingPage" />
            <p className="md:text-4xl text-xl font-bold md:pb-5 text-center   text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Training and Placement</p>

            <main className="flex flex-col md:flex-row   ">
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
            <p className="p-2 text-xl mt-2 font-thin ">The BIT Mesra Deoghar Campus has its own T&P Cell that works independently plus in parallel with its main campus BIT Mesra Placement Cell for ensuring successful career pathways of its full bright and diligent pool of students.
            The recruitment team that comes to our BIT Mesra Deoghar campus have the privilege to visit nearly located Holy place of Baba Baidyanathdham (one of the Jyotirlinga among the 12 Jyotirlingas which is also a Sparsh Jyotirlinga).
            The students of BIT Mesra Deoghar campus have the opportunity to participate in recruitment drive of its own campus as well as main & other campuses. These multiple job securing opportunities for our BIT Mesra Deoghar students in turn increases their job earning probability in early part of the placement session.
            </p>
            </main>
        </div>
        </AuthRequired>
    )
}

export default tpo
