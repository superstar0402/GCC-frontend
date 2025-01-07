// const Feedcom = ({item}: any) => {
//     return(
//         <>
//             <div className="py-[24px] px-[16px] bg-[#FFFFFF0D] rounded-[8px] w-[33.3%] xl:h-[276px]">
//                 <div className="flex gap-[10%] ">
//                     <img src={item.img} alt=""/>
//                     <div>
//                        <p className="text-[#FFFFFF] text-[20px] font-[Geist]">{item.title}</p>
//                        <p className="text-[#FFFFFF] text-[16px] font-[Geist] opacity-70">{item.role}</p>
//                     </div>
//                 </div>
//                 <img src="./public/img/landing/star.png" className="py-[16px]" alt="" />
//                 <div className="text-[16px] italic text-[#FFFFFF]">
//                     {item.text}
//                 </div>
//             </div>    
        
        
//         </>
//     )
// }

// export default Feedcom;



// Feedcom.tsx
const Feedcom = ({ item }: any) => {
    return (
        <>
            <div className="py-[24px] px-[16px] bg-[#FFFFFF0D] rounded-[8px] w-[33.3%]  h-[276px]"> {/* Fixed height set here */}
                <div className="flex gap-[10%] ">
                    <img src={item.img} alt="" />
                    <div>
                        <p className="text-[#FFFFFF] text-[20px] font-[Geist]">{item.title}</p>
                        <p className="text-[#FFFFFF] text-[16px] font-[Geist] opacity-70">{item.role}</p>
                    </div>
                </div>
                <img src="./public/img/landing/star.png" className="py-[16px]" alt="" />
                <div className="xl:text-[16px] italic text-[#FFFFFF] overflow-hidden"> {/* Added overflow-hidden */}
                    {item.text}
                </div>
            </div>
        </>
    );
};

export default Feedcom;