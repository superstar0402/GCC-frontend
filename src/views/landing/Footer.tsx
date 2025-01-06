const Footer = () => {
    return (
        <>
            <div className=" pt-[60px] px-[128px] pb-[24px]">
                <div className="flex   gap-[10%]">
                    <div className="bg-[] w-[33.3%]">
                        <img src="./public/img/landing/GCC.png" alt="" />
                        <p  className="w-[80%] text-[14px] font-[Geist] text-[#FFFFFF] pt-[24px]">Join GCC Combinator, the premier platform that bridges crypto investors with groundbreaking medical startups.</p>
                    </div>
                    <div className="bg-[] w-[33.3%] ">
                        <p className="text-[16px] font-[Geist] text-[#FFFFFF] pb-[32px] ">Contact Us</p>
                        <div className="pb-[24px] flex gap-[12px]">
                            <img src="./public/img/landing/message.svg" alt="" />
                            <p className="text-[16px] text-[#FFFFFF] font-[Geist]">support.gcc@example.com</p>
                        </div>
                        <div className="pb-[24px] flex gap-[12px]">
                            <img src="./public/img/landing/phone.svg" alt="" />
                            <p className="text-[16px] text-[#FFFFFF] font-[Geist]">+1 (234) 567 8900</p>
                        </div>
                        <div className="flex gap-[12px]">
                            <img src="./public/img/landing/telegram.svg" alt="" />
                            <p className="text-[16px] text-[#FFFFFF] font-[Geist]">https://t.me/gcc</p>
                        </div>
                    </div>
                    <div className="bg-[] w-[33.3%] text-[16px] font-[Geist] text-[#FFFFFF]">
                        <p className="pb-[32px] ">FAQ</p>
                        <p className="pb-[24px] ">Account</p>
                        <p className="pb-[24px] ">How to publish projects</p>
                        <p>Investment</p>

                    </div>
                </div>
                <div className="p-[1px] bg-[#FFFFFF] opacity-60 mt-[24px]">

                </div>
                <div className="pt-[24px] flex justify-between ">
                    <div className="flex justify-between gap-[32px]  items-center font-[Poppins] text-[16px] text-[#FFFFFF]">
                        <p >Terms of service</p>
                        <p className=" border-x-2 px-[32px]" >Private policy</p>
                        <p>Support</p>
                    </div>
                    <div className="flex gap-[24px] ">
                        <p className="flex justify-center items-center font-[Poppins] text-[16px] text-[#FFFFFF]">Follow Us</p>
                        <div className="flex gap-[12px]">
                            <img src="./public/img/landing/facebook.png" alt="" />
                            <img src="./public/img/landing/linkedin.png" alt="" />
                            <img src="./public/img/landing/youtebu.png" alt="" />
                            <img src="./public/img/landing/twitter.png" alt="" />
                        </div>
                    </div>

                </div>
           
            </div>


        </>
    )
}
export default Footer;
