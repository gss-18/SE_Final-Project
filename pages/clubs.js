import React from 'react'

import ClubC from '../components/clubCard'

import ClubsHeader from '../components/clubsHeader'
import AuthRequired from '../components/AuthRequired';


const clubs = () => {
    return (
        <AuthRequired>
        <div className="">
            <ClubsHeader className="" text="DashBoard" link="/landingPage" />
                <div className=" max-h-full items-center text-center mt-5 min-h-screen">
                    <p className="md:text-6xl text-xl font-bold  md:pb-24  text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Clubs and Society</p>
                <div className="w-auto mx-auto px-10 pl-16 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <ClubC imgUrl="/gfg.jpg" category="Tech" title="Geeks for Geeks" exp="A Computer Science Portal | Non-profit coding platform  Programming website | Geeks for Geeks" link="/GfgCard" />
                    <ClubC imgUrl="/ieee.jpg" category="Tech" title="IEEE-BITD" exp="The world's largest technical professional organization for the advancement of technology" link="/ieee" />
                    <ClubC imgUrl="/coding1.jpg" category="Tech" title="Coding Society-BITD" exp=" Coding Society's main goal is to make coding an enjoyable and enriching activity for all our members. In an increasingly data-driven world, skills in coding are becoming more valued by employers of all sectors such as finance, technology, healthcare and more " link="/clubs" />
                    <ClubC imgUrl="/auto.jpg" category="Tech" title="Auto Mobile Society" exp="The members will be encouraged and required to represent and participate in such practical learning sessions. The key aspect catered to by the society is to provide an ongoing process of learning and nurturing their skills with dedicated theoretical and practical exposure." link="/clubs" />
                    <ClubC imgUrl="/swar.jpg" category="Cultural" title="Swar" exp="The College Music Society promotes music teaching and learning, musical creativity and expression, research and dialogue, and diversity and interdisciplinary interaction. " link="/clubs" />
                    <ClubC imgUrl="/drama.jpg" category="Cultural" title="Abhivyakti" exp="The society is for anyone with an interest in drama, be that acting, directing, writing, film making, costume, set building, stage managing or just watching. We aim to encourage a love of theatre within the student community and beyond." link="/clubs" />
                    <ClubC imgUrl="/dance.jpg" category="Cultural" title="Nritya" exp="Society was formed  to provide leadership in the delivery of dance and dance education, and  to further dance as an art form, as a support for academic success, and as a process for improving individuals’ health and wellness. " link="/clubs" />
                    <ClubC imgUrl="/psco.jpg" category="Cultural" title="PhotoGraphy" exp="To promote the art and science of photography as a means of communication, image appreciation and cultural exchange." link="/clubs" />
                    <ClubC imgUrl="/fine.jpg" category="Cultural" title="Fine Arts" exp="the core mission to increase the public's enjoyment and understanding of visual art. Art societies organise art exhibitions, public lectures on art, and initiate learning programmes for children and youth." link="/clubs" />
                    </div>

                </div>
                
          </div>
        </AuthRequired>
                

        
    )
}

export default clubs
