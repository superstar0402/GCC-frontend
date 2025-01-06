const Feedcom = ({item}: any) => {
    return(
        <>
            <div className="py-[24px] px-[16px] bg-[#FFFFFF0D] rounded-[8px] w-[33.3%]">
                <div className="flex gap-[10%] ">
                    <img src={item.img} alt=""/>
                    <div>
                       <p className="text-[#FFFFFF] text-[20px] font-[Geist]">{item.title}</p>
                       <p className="text-[#FFFFFF] text-[16px] font-[Geist] opacity-70">{item.role}</p>
                    </div>
                </div>
                <img src="./public/img/landing/star.png" className="py-[16px]" alt="" />
                <div className="text-[16px] italic text-[#FFFFFF]">
                    {item.text}
                </div>
            </div>    
        
        
        </>
    )
}

export default Feedcom;



