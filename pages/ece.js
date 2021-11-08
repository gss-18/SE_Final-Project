import AuthRequired from '../components/AuthRequired';
import ClubsHeader from '../components/clubsHeader'
import { Carousel } from 'react-responsive-carousel';

const ece = () => {

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
            <p className="md:text-4xl text-xl font-bold md:pb-5 text-center   text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">ECE Department of BIT Deoghar</p>
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
            <p className="p-2 text-xl mt-2 font-thin ">The department offers a four-year undergraduate BE program in Electronics & Communications Engineering in eight semesters. The department has several well-equipped laboratories including Analog & Digital Electronics lab, Instrumentation lab, Analog and Digital Communication lab, Microprocessor lab, VLSI lab, Microwave lab, Optical Fiber Communication lab, Wireless communication & networking lab etc. Students also get exposure to developing technologies through virtual laboratory simulation packages like Multisim, Commsim, Ultiboard, Cadence,Ansys,Qualnet, MATLAB, NI Signal Express with DAC. 

            Department of Electronics & Communication Engineering has its own Training & Placement orientation module and so far Departmental placement record is highly satisfactory as successful student got placed in top MNCs and working all over the World. Student of ECE Department of BIT Deoghar regularly get selected for higher studies and internship in top level foreign universities.
            
            It is one of the elite departments because of its modern infrastructure provided to the students. The Department has modern research facilities in all major areas of Electronics and Communication such as EMI/EMC, Computational Electromagnetics, Printed RF and Microwave Circuits, Wearable Microstrip Antenna, Wireless Communication, Wireless Networking, Fiber Optic Sensor, Image Processing, Signal Processing, Speech Processing, Biomedical Signal Processing, Ultralow Power Design of circuits and Systems, VLSI and Embedded System Design, MEMS and NEMS.
            
            ECE Department of BIT Deoghar also having R&D project sponsored by Department of Science & Technology, Government of India.</p>
            </main>
        </div>
        </AuthRequired>
    )
}

export default ece
