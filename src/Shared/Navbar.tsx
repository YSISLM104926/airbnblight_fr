"use client"
import Image from 'next/image'
import airbnb from '../assets/airbnb.png'
import { useState } from 'react'
import { GlobeIcon, MenuIcon, User } from 'lucide-react'
import { FaUserCircle } from 'react-icons/fa'
const Navbar = () => {
    const [stays, setStays] = useState<boolean | null>(false);
    const [experiences, setExperiences] = useState<boolean | null>(false);
    const handleStays = () => {
        setStays(true);
        setExperiences(false);
    }
    const handleExperiences = () => {
        setExperiences(true);
        setStays(false);
    }
    return (
        <div className='flex items-center justify-between mt-12  mx-auto w-[1840px]'>
            <div>
                <Image src={airbnb} height={120}
                    width={120} alt='ss' />
            </div>
            <div className='flex'>
                <button className={`text-xl  ${stays === false && experiences === true && 'text-gray-500'}  px-5 py-2 ${stays === true ? 'font-medium cursor-pointer' : 'hover:bg-gray-100 hover:rounded-3xl transition-transform'}`} onClick={handleStays}>Stays</button>
                <button className={`text-xl ${stays === true && experiences === false && 'text-gray-500'} px-5 py-2 ${experiences === true ? 'font-medium cursor-pointer' : 'hover:bg-gray-100 hover:rounded-3xl transition-transform'}`} onClick={handleExperiences}>Experiences</button>
            </div>
            <div className='flex items-center'>
                <button className='text-lg px-5 py-2 font-medium hover:bg-gray-100 hover:rounded-3xl transition-transform'>Airbnb your home</button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <GlobeIcon className="w-6 h-6 text-gray-600" />
                </button>

                <div className='flex items-center border rounded-3xl px-1 hover:shadow-md ms-4 
                hover:cursor-pointer transition-all'>
                    <button className="p-2 rounded-full ">
                        <MenuIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-full">
                        <FaUserCircle className="w-8 h-8 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar