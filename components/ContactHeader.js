import {HomeIcon,InboxIcon,PhoneIncomingIcon} from '@heroicons/react/outline'

const ContactHeader = () => {
    return (
        
        <div className="bg-green-600 p-5 flex items-center">
            <InboxIcon className="md:h-8 hidden md:block " /> 
            <span className="  md:ml-3 md:text-xl font-mono text-sm">bitdeoghar@bitmesra.ac.in</span> 
            <PhoneIncomingIcon className="md:h-6 md:ml-4 hidden md:block" />
            <span className=" md:ml-3 md:text-xl font-mono ml-3 "> 093346 54856 </span> 
        </div>
        
    )
}

export default ContactHeader
