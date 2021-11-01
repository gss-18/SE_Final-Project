import React from 'react'
import {InboxIcon,PhoneIncomingIcon} from '@heroicons/react/solid'
import ClubC from '../components/clubCard'

import ClubsHeader from '../components/clubsHeader'

const clubs = () => {
    return (
        <div className="">
                <div className="bg-green-600 p-5 flex items-center">
                    <InboxIcon className="md:h-8 hidden md:block " /> 
                    <span className="  md:ml-3 md:text-xl font-mono text-sm">bitdeoghar@bitmesra.ac.in</span> 
                    <PhoneIncomingIcon className="md:h-6 md:ml-4 hidden md:block" />
                    <span className=" md:ml-3 md:text-xl font-mono ml-3 "> 093346 54856 </span> 
                </div>
            
                        <ClubsHeader className=""/>
                <div className=" max-h-full items-center text-center mt-5 min-h-screen">
                    <p className="md:text-3xl text-xl font-sans italic text-black bg-indigo-600 p-5">"Clubs and Society"</p>
                <div className="w-auto mx-auto px-10 pl-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <ClubC imgUrl="/gfg.jpg" category="Tech" title="Geeks for Geeks" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/clubs" />
                    <ClubC imgUrl="/ieee.jpg" category="Tech" title="IEEE-BITD" exp="The world's largest technical professional organization for the advancement of technology" link="/clubs" />
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
