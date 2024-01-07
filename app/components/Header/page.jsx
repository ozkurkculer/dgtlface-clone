import Image from 'next/image';
import Navbar from '../Navbar/page';
import { FaTelegram, FaPhone } from "react-icons/fa6";


export default function Header(){
    return(
        <div className="sticky z-20 top-0 px-10 py-5 flex flex-row items-center justify-between bg-white/80 bg-blend-saturation ">
            <Image src={'https://dgtlface.com/wp-content/uploads/2022/08/DGTLFACE_400X400_Siyah-300x300-1-e1663175143749.png'} width={225} height={225} alt='Digitalface Logo' />
            <Navbar />
            <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-2 items-center">
                <FaPhone className='text-primary'/>
                <p className="text-primary">(0532)-645-1767</p>
            </div>
            <button className='bg-primary text-white h-10 px-3 rounded-lg flex flex-row gap-2 items-center'>
                <FaTelegram className='text-white' />
                Teklif gönderin
            </button>
            </div>
        </div>
    );
}