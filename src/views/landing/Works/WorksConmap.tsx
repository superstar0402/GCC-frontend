// const WorksConmap = ({item}: any) => {
//   return (
//         <div className="w-[50%] px-[]  bg-[black]">
//             <div className="w-[100%] flex justify-center items-center pb-[40px]">
//                 <img src={item.img} alt="" className="flex justify-center items-center" />
//             </div>    
//             <div className="flex w-[100%] gap-[20px] ">
//                 <div className="w-[10%]">
//                     <p className=" text-[72px] font-bold text-[#FFFFFF] flex justify-center items-center">
//                         {item.Order}
//                     </p>
//                 </div>
//                     <div className="w-[90%] flex items-center">
//                         <p className="text-[24px] font-bold text-[#FFFFFF] font-Geist   ">
//                             {item.title}
//                         </p>
//                     </div>
//             </div>
//             <div className="text-[16px] text-[#FFFFFF] font-Geist w-full pt-[20px]">
//                 {item.text}
//             </div>

//         </div>
//   )
// }

// export default WorksConmap;



// WorksConmap.tsx

const WorksConmap = ({ item }: any) => {
    return (
        <div className="w-full md:w-[48%] lg:w-[23%] bg-[#13131B] mb-4 p-4 rounded-lg">
            <div className="flex justify-center items-center pb-[40px]">
                <img 
                    src={item.img} 
                    className="flex justify-center items-center" 
                    alt={item.title} 
                />
            </div>
            <div className="flex w-full gap-[20px]">
                <div className="w-[10%]">
                    <p className="text-[72px] font-bold text-[#FFFFFF66] flex justify-center items-center">
                        {item.Order}
                    </p>
                </div>
                <div className="w-[90%] flex items-center">
                    <p className="text-[24px] font-bold text-[#FFFFFF] font-Geist">
                        {item.title}
                    </p>
                </div>
            </div>
            <div className="text-[16px] text-[#FFFFFF] font-Geist w-full pt-[20px]">
                {item.text}
            </div>
        </div>
    );
};

export default WorksConmap;
