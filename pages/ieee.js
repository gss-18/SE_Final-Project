import ClubsHeader from '../components/clubsHeader'
import ClubC from '../components/clubCard'
import AuthRequired from '../components/AuthRequired';
const ieee = () => {
    return (
        <AuthRequired>
        <div>
        <ClubsHeader text="Clubs" link="/clubs"/>
        <div className=" max-h-full items-center  mt-5 min-h-screen">
                <p className="md:text-6xl text-xl font-bold  md:pb-24 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900  ">Upcoming Events</p>
                <div className="w-auto mx-auto px-10 pl-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <ClubC imgUrl="/ieeeS1.jpg" category="Tech" title="Impact Lecture Series" exp="Impact Lecture Series session, jointly announced by our Student Branch and IIC 3.0 on 30th October 2021. We will welcome Mr. Nitin Nagar, Assistant Territory Manager, Scientech Technologies Pvt. Ltd. Indore." link="https://forms.gle/939bJbfVutvUtXyb8" />
                <ClubC imgUrl="/ieeeS2.jpg" category="Tech" title="Impact Lecture Series" exp=" Impact Lecture Series session, jointly announced by our Student Branch and IIC 3.0 on 30th October 2021. We will welcome Mr. Anurag Gupta, CEO & Founder of STEMROBO Technologies Pvt Ltd. and Director & Founder of Tevatron Technologies Pvt Ltd." link="https://forms.gle/Y3emgmivKASpNRdH9" />
                </div>
            <p className="md:text-6xl text-xl font-bold mt-5 md:pb-24 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 ">Past Events </p>
                <div className="w-auto mx-auto px-10 pl-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <ClubC imgUrl="/ieeeS3.jpg" category="Tech" title="Gyan Ganga" exp="Glad to invite you for our upcoming Gyan Ganga session on 25th September 2021. We'll be welcoming Mrs. Nishigandha Kelkar who is currently working as an Engineering Leader with an Aerospace Fortune 500." link="https://www.instagram.com/p/CUDULbXPM1B/" />
               
            </div>
            </div>
        </div>
        </AuthRequired>
    )
}

export default ieee
