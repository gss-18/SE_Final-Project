import Image from 'next/image'
import Logo from '../public/newLogo.png'
import {FolderIcon} from '@heroicons/react/outline'

const clubsHeader = ({text,link}) => {
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
                             <FolderIcon className=" h-10 mb-1 group-hover:animate-bounce text-red-500" />
                           <a href={link} ><p className=" opacity-0 group-hover:opacity-100 tracking-wide font-semibold ">{text}</p></a>
                        </div>
                     </div>

             </div>
            
        </div>
        
    )
}

export default clubsHeader