import React from 'react'

import ClubC from '../components/clubCard'

import ClubsHeader from '../components/clubsHeader'



const clubs = () => {
    return (
        <div className="">
            <ClubsHeader className="" text="DashBoard" link="/landingPage" />
                <div className=" max-h-full items-center text-center mt-5 min-h-screen">
                    <p className="md:text-6xl text-xl font-bold  md:pb-24  text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Clubs and Society</p>
                <div className="w-auto mx-auto px-10 pl-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <ClubC imgUrl="/gfg.jpg" category="Tech" title="Geeks for Geeks" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/GfgCard" />
                    <ClubC imgUrl="/ieee.jpg" category="Tech" title="IEEE-BITD" exp="The world's largest technical professional organization for the advancement of technology" link="/ieee" />
                    <ClubC imgUrl="/coding1.jpg" category="Tech" title="Coding Society-BITD" exp="The world's largest technical professional organization for the advancement of technology" link="/clubs" />
                    <ClubC imgUrl="/auto.jpg" category="Tech" title="Auto Mobile Society" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/clubs" />
                    <ClubC imgUrl="/swar.jpg" category="Cultural" title="Swar" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/clubs" />
                    <ClubC imgUrl="/drama.jpg" category="Cultural" title="Abhivyakti" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/clubs" />
                    <ClubC imgUrl="/dance.jpg" category="Cultural" title="Geeks for Geeks" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/clubs" />
                    <ClubC imgUrl="/psco.jpg" category="Cultural" title="Geeks for Geeks" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/clubs" />
                    <ClubC imgUrl="/fine.jpg" category="Cultural" title="Geeks for Geeks" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/clubs" />
                    </div>

                </div>
                
          </div>
               
                

        
    )
}

export default clubs
