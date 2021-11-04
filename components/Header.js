import Image from 'next/image'
import Logo from '../public/newLogo.png'
import {UserIcon} from '@heroicons/react/outline'

const Header = () => {
    return (
        <div className="">
             <div className=" flex flex-col sm:flex-row justify-between items-center h-auto m-5">
                    <Image 
                    src={Logo}
                    width={350} 
                    height={100} 
                    layout="fixed"
                    />
                    <div className="flex mx-12 max-w-2xl">
                       
                        <div className="pl-6 flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-black ">
                             <UserIcon className=" h-10 mb-1  text-blue-600" />
                           <a href="/userProfile" ><p className="  tracking-wide font-bold  ">Profile</p></a>   
                        </div>
                     </div>

             </div>
            
        </div>
    )
}

export default Header
