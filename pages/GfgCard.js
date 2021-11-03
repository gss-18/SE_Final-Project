import ClubsHeader from '../components/clubsHeader'
import ClubC from '../components/clubCard'
const GfgCard = () => {
    return (
        <div>
            <ClubsHeader text="Clubs" link="/clubs"/>
                <div className=" max-h-full items-center  mt-5 min-h-screen">
                        <p className="md:text-4xl text-xl  text-black bg-indigo-600 p-5  ">Upcoming Events --></p>
                        <div className="w-auto mx-auto px-10 pl-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        <ClubC imgUrl="/geeksU1.jpg" category="Tech" title="Ask me Anything" exp="Ask me Anything aka AmA , is a place where you learn from the greatest minds who perfected their Own placements.
                        So what are you waiting for? Enroll Now." link="https://forms.gle/5ycWNTS186tJ9chA8" />
                        <ClubC imgUrl="/geeksU2.jpg" category="Tech" title="Ask me Anything" exp="Ask me Anything aka AmA , is a place where you learn from the greatest minds who perfected their Own placements.
                        So what are you waiting for? Enroll Now." link="https://forms.gle/uXyHaqSXojseW6R46" />
                        </div>
                    <p className="md:text-4xl text-xl  text-black bg-indigo-600 p-5  ">Past Events --></p>
                        <div className="w-auto mx-auto px-10 pl-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        <ClubC imgUrl="/nirman.jpg" category="Tech" title="Nirman" exp="Want to increase your WebDev aptitude? Simple answer to this- Nirman
                        Click the link in bio for more details, It's GFG Student Chapter BIT-D's guarantee,
                        You won't regret being a part of this event." link="https://www.instagram.com/p/CSa2WZzF58E/" />
                        <ClubC imgUrl="/SouGfg.jpg" category="Tech" title="Webinar" exp="Get an insightful sneak peek into depths of Web development from Chief Information Technology officer at spacenova, SOUTIK NANDY sir" link="https://www.instagram.com/p/CR_O611FE62/" />
                        <ClubC imgUrl="/bilalA.jpg" category="Tech" title="Webinar" exp="We present to you our another interviewer, Mr. Bilal Ahmed, who would be joining us on Geek-I-Knack this week.
                        Make sure to appear for your Mock Interview tour" link="https://www.instagram.com/p/CMR6YACAcxn/" />
                        <ClubC imgUrl="/muhageeks.jpg" category="Tech" title="Webinar" exp="This great personality is none other than Muhammad. Hasan Khan,who is a full stack developer with 13+ years of industrial experience and has shared amazing working experience with tech giants like Microsoft, Amazon etc. and is currently working in Google ." link="https://www.instagram.com/p/CMAHLMGAOGg/" />
                    </div>
                    </div>
                </div>
        
    )
}

export default GfgCard
