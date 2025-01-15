

const Benefitcom = ({item}:any) => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-[32px] w-full ">
                <div className="w-[80%] md:w-[47%] py-[42.5px]  font-Geist text-[#FFFFFF] mx-auto ">
                    <p className="lg:text-[22px] xl:text-[24px] font-bold">{item.title}</p>
                <p className="pt-[32px] lg:text-[18px] xl:text-[20px]">{item.text}
                    </p>
                </div>

                <div className="w-[1%] md:flex flex-col items-center justify-center hidden  mx-auto">
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FFFFFF]"></div>
                    <div className="w-[2px] h-[202px] bg-[#FFFFFF]"></div>
                    <div className="w-[12px] h-[12px] rounded-full bg-[#FFFFFF]"></div>
                </div>

                <div className="w-[80%] md:w-[47%] my-auto mx-auto">
                    <img src={item.img}/>
                </div>
            </div>
        </>
    )
}

export default Benefitcom;