
const Feedcom = ({ item }: any, {key}: any) => {
    return (
        <>
            <div className="py-[24px] px-[16px] bg-[#FFFFFF0D] rounded-[8px] w-full  h-[276px] overflow-y-hidden  "> {/* Fixed height set here */}
                <div className="flex gap-[10%] ">
                    <img src={item.img} alt="" />
                    <div>
                        <p className="text-[#FFFFFF] text-[20px] font-[Geist]">{item.title}</p>
                        <p className="text-[#FFFFFF] text-[16px] font-[Geist] opacity-70">{item.role}</p>
                    </div>
                </div>
                <img src="./public/img/landing/star.png" className="py-[16px]" alt="" />
                <div className="xl:text-[16px] italic text-[#FFFFFF] "> {/* Added overflow-hidden */}
                    {item.text}
                </div>
            </div>
        </>
    );
};

export default Feedcom;