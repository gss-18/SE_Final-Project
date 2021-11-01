import Image from 'next/image'
import Logo from '../public/newLogo.png'

const Header = () => {
    return (
        <div  className="top-0  flex items-center p-2 lg:px-5 ">

        
            <div className="flex items-center">
                <Image 
                src={Logo}
                width={350} 
                height={100} 
                layout="fixed"
                />
            
            </div>
        </div>
    )
}

export default Header
