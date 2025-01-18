import React, { useState } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DropdownItem from '@/components/ui/Dropdown/DropdownItem';

const Dropitem = () => {


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const downScroll = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    const moveScroll = (id: string) => {
        const height = document.getElementById(id)?.getBoundingClientRect().top;
        window.scrollBy({
            top: height,
            behavior: 'smooth',
        });
    }

    const handleScroll = (offset: any) => {
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });

        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <>

            <div>
                <div className='dropdown block lg:hidden'>
                    <div
                        className='dropdown-toggle'
                        id="dropdown-toggle-989-FSmG5AkhRT"
                        onClick={toggleDropdown}
                    >
                        <div className='header-action-item flex items-center gap-2'>
                            <span className='avatar avatar-circle w-[32px] h-[32px] min-w-[20px] leading-[32px] text-[12px]'>
                                <img src="./public/img/landing/setting.svg" className='w-[32px]' alt="setting" />
                            </span>
                        </div>
                    </div>

                    {isDropdownOpen && (
                        <ul id='base-menu-26-QlkY8E5Sse' className='dropdown-menu bg-[#dbd7d7] bottom-end visible'>

                            <li
                                className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px] hover:bg-red-500 cursor-pointer'
                                onClick={() => handleScroll(0)}
                            >
                                <span className='flex gap-2 items-center w-full text-black justify-center hover:text-white'>Home</span>
                            </li>
                            <li
                                className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px] hover:bg-red-500 cursor-pointer'
                                onClick={() => moveScroll("works")}
                            >
                                <span className='flex gap-2 items-center w-full text-black justify-center hover:text-white'>How it works</span>
                            </li>
                            <li
                                className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px] hover:bg-red-500 cursor-pointer'
                                onClick={() => downScroll()}
                            >
                                <span className='flex gap-2 items-center w-full text-black justify-center hover:text-white'>Contact Us</span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

        </>
    )
}

export default Dropitem;