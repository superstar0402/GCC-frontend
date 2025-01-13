



// import React, { useState } from 'react';
// import Tabs from '@/components/ui/Tabs';
// import Button from '@/components/ui/Button';

// const { TabNav, TabList } = Tabs;

// const Header = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const handleScroll = (offset: number) => {
//         window.scrollBy({
//             top: offset,
//             behavior: 'smooth',
//         });
//         // Close the dropdown after clicking an item
//         setIsDropdownOpen(false);
//     };

//     const toggleDropdown = () => {
//         setIsDropdownOpen(prevState => !prevState);
//     };

//     return (
//         <>
//             <div className="flex justify-between items-center h-[88px] bg-[#13131B] drop-shadow-2xl">
//                 <div className='pr-[20px]'>
//                     <p className='text-4xl font-bold text-[#1C4CF6]'>GCC</p>
//                     <p className='text-white font-bold'>Combinator</p>
//                 </div>
//                 <div className='flex flex-row gap-[0px] lg:gap-[50px]'>
//                     <div className='hidden lg:block xl:w-[100%]'>
//                         <Tabs defaultValue="tab1">
//                             <TabList className='xl:gap-[60px]'>
//                                 <div onClick={() => handleScroll(0)}>
//                                     <TabNav value="tab1" className='text-white text-[14px] lg:text-[16px]'>
//                                         Home
//                                     </TabNav>
//                                 </div>
//                                 <div onClick={() => handleScroll(1100)}>
//                                     <TabNav value="tab2" className='text-white text-[14px] lg:text-[16px]'>
//                                         How it works
//                                     </TabNav>
//                                 </div>
//                                 <div onClick={() => handleScroll(3000)}>
//                                     <TabNav value="tab3" className='text-white text-[14px] lg:text-[16px]'>
//                                         Contact Us
//                                     </TabNav>
//                                 </div>
//                             </TabList>
//                         </Tabs>
//                     </div>

//                     <div className='flex flex-row xl:gap-10 items-center'>
//                         <Button
//                             variant="solid"
//                             className='rounded-[10px] text-[14px] bg-[#1C4CF6] w-[80px] sm:w-[120px] justify-center items-center flex'
//                         >
//                             Join Us
//                         </Button>
//                         <div onClick={() => handleScroll(0)}>
//                             <TabNav value="solid" className='text-white text-[14px] w-[80px]'>
//                                 Log in
//                             </TabNav>
//                         </div>
//                     </div>

//                     <div>
//                         <div className='dropdown block lg:hidden'>
//                             <div 
//                                 className='dropdown-toggle' 
//                                 id="dropdown-toggle-989-FSmG5AkhRT" 
//                                 onClick={toggleDropdown} // Toggle dropdown on click
//                             >
//                                 <div className='header-action-item flex items-center gap-2'>
//                                     <span className='avatar avatar-circle w-[32px] h-[32px] min-w-[20px] leading-[32px] text-[12px]'>
//                                         <img src="./public/img/landing/setting.svg" className='w-[32px]' alt="" />
//                                     </span>
//                                 </div>
//                             </div>

//                             {isDropdownOpen && ( // Conditionally render the dropdown menu
//                                 <ul id='base-menu-26-QlkY8E5Sse' className='dropdown-menu bg-[#dbd7d7] bottom-end visible'>
//                                     {/* Change hover effect to red */}
//                                     <li 
//                                         className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px]' 
//                                         onClick={() => handleScroll(0)}
//                                     >
//                                         <span className='flex gap-2 items-center w-full text-black justify-center'>Home</span>
//                                     </li>
//                                     <li 
//                                         className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px]' 
//                                         onClick={() => handleScroll(1100)}
//                                     >
//                                         <span className='flex gap-2 items-center w-full text-black justify-center'>How it works</span>
//                                     </li>
//                                     <li 
//                                         className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px]' 
//                                         onClick={() => handleScroll(3000)}
//                                     >
//                                         <span className='flex gap-2 items-center w-full text-black justify-center'>Contact Us</span>
//                                     </li>
//                                 </ul>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import Button from '@/components/ui/Button';

const { TabNav, TabList } = Tabs;

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleScroll = (offset: number) => {
        window.scrollBy({
            top: offset,
            behavior: 'smooth',
        });
        // Close the dropdown after clicking an item
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="flex justify-between items-center h-[88px] bg-[#13131B] drop-shadow-2xl">
                <div className='pr-[20px]'>
                    <p className='text-4xl font-bold text-[#1C4CF6]'>GCC</p>
                    <p className='text-white font-bold'>Combinator</p>
                </div>
                <div className='flex flex-row gap-[0px] lg:gap-[50px]'>
                    <div className='hidden lg:block xl:w-[100%]'>
                        <Tabs defaultValue="tab1">
                            <TabList className='xl:gap-[60px]'>
                                <div onClick={() => handleScroll(0)}>
                                    <TabNav value="tab1" className='text-white text-[14px] lg:text-[16px]'>
                                        Home
                                    </TabNav>
                                </div>
                                <div onClick={() => handleScroll(1100)}>
                                    <TabNav value="tab2" className='text-white text-[14px] lg:text-[16px]'>
                                        How it works
                                    </TabNav>
                                </div>
                                <div onClick={() => handleScroll(3000)}>
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
                        <div onClick={() => handleScroll(0)}>
                            <TabNav value="solid" className='text-white text-[14px] w-[80px]'>
                                Log in
                            </TabNav>
                        </div>
                    </div>

                    <div>
                        <div className='dropdown block lg:hidden'>
                            <div 
                                className='dropdown-toggle' 
                                id="dropdown-toggle-989-FSmG5AkhRT" 
                                onClick={toggleDropdown} // Toggle dropdown on click
                            >
                                <div className='header-action-item flex items-center gap-2'>
                                    <span className='avatar avatar-circle w-[32px] h-[32px] min-w-[20px] leading-[32px] text-[12px]'>
                                        <img src="./public/img/landing/setting.svg" className='w-[32px]' alt="" />
                                    </span>
                                </div>
                            </div>

                            {isDropdownOpen && ( // Conditionally render the dropdown menu
                                <ul id='base-menu-26-QlkY8E5Sse' className='dropdown-menu bg-[#dbd7d7] bottom-end visible'>
                                    {/* Change text color to white on hover and click */}
                                    <li 
                                        className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px] hover:bg-red-500 cursor-pointer' 
                                        onClick={() => handleScroll(0)}
                                    >
                                        <span className='flex gap-2 items-center w-full text-black justify-center hover:text-white'>Home</span>
                                    </li>
                                    <li 
                                        className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px] hover:bg-red-500 cursor-pointer' 
                                        onClick={() => handleScroll(1100)}
                                    >
                                        <span className='flex gap-2 items-center w-full text-black justify-center hover:text-white'>How it works</span>
                                    </li>
                                    <li 
                                        className='menu-item menu-item-dark menu-item-hoverable border-4 border-gray-950 mb-1 px-0 h-[35px] hover:bg-red-500 cursor-pointer' 
                                        onClick={() => handleScroll(3000)}
                                    >
                                        <span className='flex gap-2 items-center w-full text-black justify-center hover:text-white'>Contact Us</span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
