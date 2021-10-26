import {useEffect,useState} from 'react';
import { Menu,Transition } from "@headlessui/react";


function Header() {
    const [Open,setOpen] = useState(false);
    return (
        <div className='md:flex bg-white p-5 md:px-0 py-2 md:pl-36 items-center border-b-2'>
            <div className='flex w-full'>
                <img src="/Logo.png" className='h-16 w-auto' />

                <p className='p-2 pl-5 font-semibold text-gray-500 lg:text-xl'>
                    <p className='font-bold text-xl text-red-500 lg:text-2xl'>Birla Institute Of Technology </p>Deoghar
                </p> 
            
                <div className='hidden md:flex md:my-auto md:pr-36 md:ml-auto'>
                
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2 '>Home</a>
                <Menu>
                    <Menu.Button className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Browse by tags</Menu.Button>
                    <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items> 
                        <Menu.Item>
                            {({ active})=>(
                                <a  className={`${
                                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                  }`}>
                                  Electronics</a>
                            )}
                        </Menu.Item>
                    
                    </Menu.Items>
                    </Transition>
                </Menu>
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Browse by department</a>
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Upcoming Events</a>
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Faculty</a>
            
                </div>
                {/*mobile mode */}
                    <div className="ml-auto items-center my-auto  md:hidden">
                        <button
                            onClick={() => setOpen(!Open)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!Open ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>  
                            )}
                        </button>
                    </div>
            </div>
            <Transition
                show={Open}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                    <div className="block md:hidden" id="mobile-menu">
                        <div ref={ref} className="block px-2 pt-2 pb-3 space-y-2 sm:px-3 ">
                            
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2 '>Home</a>
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Browse by tags</a>
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Browse by department</a>
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Upcoming Events</a>
                    <a href="/" className='font-semibold text-gray-500 rounded-md hover:bg-gray-200 hover:text-red-500 px-4 py-2'>Faculty</a>
                       
                
                        </div>
                    </div>
                )}
            </Transition>
        </div>
                
    )
}

export default Header
