import AuthRequired from '../components/AuthRequired';
import ClubsHeader from '../components/clubsHeader'
import { Carousel } from 'react-responsive-carousel';

const cse = () => {
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
            <p className="md:text-4xl text-xl font-bold md:pb-5 text-center   text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">CSE Department of BIT Deoghar</p>

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
            <p className="p-2 text-xl mt-2 font-thin ">The Department of Computer Science & Engineering was established along with the inception of the college in the year 2007. At present only Under Graduate program and Ph.d program in Computer Sc. & Engineering are offered. The department has 3 spacious and well-designed laboratory, equipped with over 200-networked high-end  P-IV personal computers with high speed Internet connectivity. CyberRoam™ is also available for controlling networking and distribution of bandwidth  across campus. Couple of Dell servers are used for deploying client server softwares laboratories.  Operational in an environment of Windows Server 2008/2003, Windows 7 Prof, Windows XP Professional, MS-Office 2010/2007 and UNIX. .net, Python and Advanced Java with Visual C++ environment are available for application development. Open source application development using PHP, MySQL and Android applications are highly appreciated  Department  also has a niche flavour towards research and industrial implementation focussing Web based Auctioning, Developing  Soft Computing  based Utilities, System Biology integration,  Development of  Recommender System, Hybrid intelligence in security, Software testing and Reliability analysis  of software Applications, Internet of Things  with Intelligence and Big data Analytic and Graph Database development.</p>
            </main>
        </div>
        </AuthRequired>
    )
}

export default cse
