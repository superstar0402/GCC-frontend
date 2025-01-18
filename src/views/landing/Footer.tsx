
// const Footer = () => {
//     return (
//         <>
//             <div className=" pt-[24px]  pb-[24px] bg-[black] px-[70px] lg:px-[128px] ">
//                 <div className="flex flex-wrap justify-between gap-[10%] w-full">
//                     <div className=" w-[70%] pb-[70px] sm:pb-[0px]  sm:w-[25%] ">
//                         <img
//                             src="./public/img/landing/GCC.png"
//                             alt=""
//                         />
//                         <p className="w-[80%] text-[14px] font-[Geist] text-[#FFFFFF] pt-[24px] ">Join GCC Combinator, the premier platform that bridges crypto investors with groundbreaking medical startups.</p>
//                     </div>

//                     <div className="w-[70%] pb-[70px] sm:pb-[0px] sm:w-[25%] text-[16px] font-[Geist] text-[#FFFFFF]">
//                         <p className="pb-[32px] ">FAQ</p>
//                         <p className="pb-[24px] ">Account</p>
//                         <p className="pb-[24px] ">How to publish projects</p>
//                         <p>Investment</p>

//                     </div>
//                     <div className="w-[70%] sm:w-[25%] ">
//                         <p className="text-[16px] font-[Geist] text-[#FFFFFF] pb-[32px] ">Contact Us</p>
//                         <div className="pb-[24px] flex gap-[12px]">
//                             <img
//                                 src="./public/img/landing/message.svg"
//                                 alt=""
//                             />
//                             <p className="text-[16px] text-[#FFFFFF] font-[Geist]">support.gcc@ example.com</p>
//                         </div>
//                         <div className="pb-[24px] flex gap-[12px]">
//                             <img
//                                 src="./public/img/landing/phone.svg"
//                                 alt=""
//                             />
//                             <p className="text-[16px] text-[#FFFFFF] font-[Geist]">+1 (234) 567 8900</p>
//                         </div>
//                         <div className="flex gap-[12px]">
//                             <img
//                                 src="./public/img/landing/telegram.svg"
//                                 alt=""
//                             />
//                             <p className="text-[16px] text-[#FFFFFF] font-[Geist]">https://t.me/gcc</p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className="p-[1px] bg-[#FFFFFF] opacity-60 mt-[24px]">

//                 </div> */}
//                 {/* <div className="pt-[24px] flex flex-col lg:flex-row justify-between border-t-2 mt-[24px] w-[100%] ">
//                     <div className="flex justify-between gap-[32px]   items-center font-[Poppins] text-[16px] text-[#FFFFFF]">
//                         <p >Terms of service</p>
//                         <p className=" border-x-2 px-[32px]" >Private policy</p>
//                         <p>Support</p>
//                     </div>
//                     <div className="flex gap-[24px] pt-[30px] lg:pt-[0px]">
//                         <p className="flex justify-center items-center font-[Poppins] text-[16px] text-[#FFFFFF]">Follow Us</p>
//                         <div className="flex gap-[12px]">
//                             <img src="./public/img/landing/facebook.png" alt="" />
//                             <img src="./public/img/landing/linkedin.png" alt="" />
//                             <img src="./public/img/landing/youtebu.png" alt="" />
//                             <img src="./public/img/landing/twitter.png" alt="" />
//                         </div>
//                     </div>

//                 </div> */}

//             </div>


//         </>
//     )
// }
// export default Footer;





const Footer = () => {
    return (
        <>
            <div className="py-[24px] bg-[black] px-[70px] lg:px-[128px]">
                <div className="flex flex-col sm:flex-row justify-between gap-[10%] w-full">
                    {/* First Section */}
                    <div className="w-full sm:w-[30%] pb-[70px] sm:pb-[0px] justify-center items-center ">
                        <div className="">
                            <img
                                src="./public/img/landing/GCC.png"
                                className="w-[112px]  mx-auto sm:mx-0  "
                                alt=""
                            />
                            <p className="w-[70%] sm:w-full xl:w-[80%] sm:text-[14px] font-Geist text-[#FFFFFF] pt-[24px] mx-auto sm:mx-0 ">
                                Join GCC Combinator, the premier platform that bridges crypto investors with groundbreaking medical startups.
                            </p>
                        </div>
                    </div>
                    <div className="block sm:hidden w-[100%] h-[2px] bg-white mb-[20px]">
                    </div>

                    {/* Second Section */}
                    <div className="w-full sm:w-[30%] pb-[32px] sm:pb-[0px] flex flex-col text-center sm:text-left text-[16px] font-[Geist] text-[#FFFFFF]">
                        <p className="pb-[32px]">FAQ</p>
                        <p className="pb-[24px]">Account</p>
                        <p className="pb-[24px]">How to publish projects</p>
                        <p>Investment</p>
                    </div>
                    <div className="block sm:hidden w-[100%] h-[2px] bg-white mb-[20px]">
                    </div>

                    {/* Third Section */}
                    <div className="w-full sm:w-[30%] flex flex-col text-center sm:text-left">
                        <p className="text-[16px] font-[Geist] text-[#FFFFFF] pb-[32px]">Contact Us</p>
                        <div className="pb-[24px] flex items-center gap-[12px] justify-center sm:justify-start">
                            <img
                                src="./public/img/landing/message.svg"
                                alt=""
                            />
                            <p className="text-[16px] text-[#FFFFFF] font-[Geist]">support.gcc@example.com</p>
                        </div>
                        <div className="pb-[24px] flex items-center gap-[12px] justify-center sm:justify-start">
                            <img
                                src="./public/img/landing/phone.svg"
                                alt=""
                            />
                            <p className="text-[16px] text-[#FFFFFF] font-[Geist]">+1 (234) 567 8900</p>
                        </div>
                        <div className="flex items-center gap-[12px] justify-center sm:justify-start">
                            <img
                                src="./public/img/landing/telegram.svg"
                                alt=""
                            />
                            <p className="text-[16px] text-[#FFFFFF] font-[Geist]">https://t.me/gcc</p>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="pt-[24px] flex flex-col lg:flex-row justify-between border-t-2 mt-[24px] w-full">
                    <div className="flex justify-between gap-8 items-center font-Poppins text-16 text-white">
                        <p>Terms of service</p>
                        <p className="border-x-2 px-8">Privacy policy</p>
                        <p>Support</p>
                    </div>
                    <div className="flex gap-6 pt-8 lg:pt-0">
                        <p className="flex justify-center items-center font-Poppins text-16 text-white">Follow Us</p>
                        <div className="flex gap-3">
                            <img src="./public/img/landing/facebook.png" alt="" />
                            <img src="./public/img/landing/linkedin.png" alt="" />
                            <img src="./public/img/landing/youtube.png" alt="" />
                            <img src="./public/img/landing/twitter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
