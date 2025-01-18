import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DropdownItem from '@/components/ui/Dropdown/DropdownItem';
import Dropitem from "./Header/Dropitem";
const { TabNav, TabList } = Tabs;

const Header = () => {
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
            <div className=' z-30 fixed w-full pr-[128px] lg:pr-[256px] bg-[#13131B] drop-shadow-2xl '>
                <div className="flex justify-between items-center h-[88px] ">
                    <div className='pr-[20px]'>
                        <p className='text-4xl font-bold text-[#1C4CF6]'>GCC</p>
                        <p className='text-white font-bold'>Combinator</p>
                    </div>
                    <div className='flex flex-row gap-[0px] lg:gap-[50px]'>
                        <div className='hidden lg:block xl:w-[100%]'>
                            <Tabs defaultValue="tab1">
                                <TabList className='xl:gap-[60px]'>
                                    <div onClick={() => handleScroll(10)}>
                                        <TabNav value="tab1" className='text-white text-[14px] lg:text-[16px]'>
                                            Home
                                        </TabNav>
                                    </div>
                                    <div onClick={() => moveScroll("works")}>
                                        <TabNav value="tab2" className='text-white text-[14px] lg:text-[16px]'>
                                            How it works
                                        </TabNav>
                                    </div>
                                    <div onClick={() => downScroll()}>
                                        <TabNav value="tab3" className='text-white text-[14px] lg:text-[16px]'>
                                            Contact Us
                                        </TabNav>
                                    </div>
                                </TabList>
                            </Tabs>
                        </div>

                        <div className='flex flex-row xl:gap-10 items-center'>
                            <Button
                                variant="solid"
                                className='rounded-[10px] text-[14px] bg-[#1C4CF6] w-[80px] sm:w-[120px] justify-center items-center flex'
                            >
                                Join Us
                            </Button>
                            <div>
                                <TabNav value="solid" className='text-white text-[14px] w-[80px]'>
                                    Log in
                                </TabNav>
                            </div>
                        </div>

                        {/* <div>
                            <div className='dropdown block lg:hidden'>
                                <div
                                    className='dropdown-toggle'
                                    id="dropdown-toggle-989-FSmG5AkhRT"
                                    onClick={toggleDropdown}
                                >
                                    <div className='header-action-item flex items-center gap-2'>
                                        <span className='avatar avatar-circle w-[32px] h-[32px] min-w-[20px] leading-[32px] text-[12px]'>
                                            <img src="./public/img/landing/setting.svg" className='w-[32px]' alt="" />
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
                        </div> */}
                        <Dropitem/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
