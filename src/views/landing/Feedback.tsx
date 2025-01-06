import Feedcom from "./Feedback/Feedcom"

const Feedback = () => {

    const ContentList = [
        {
            img: "/img/landing/man1.svg",
            title: "John D.",
            role:  "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

        },
        {
            img: "/img/landing/man2.svg",
            title: "John D.",
            role:  "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

        },
        {
            img: "/img/landing/man1.svg",
            title: "John D.",
            role:  "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

        }
    ]
    return (
        <>
            <div className="mt-[60px] px-[128px] mb-[180px]">
                <p className="text-[40px] pt-[120px] font-[Geist] text-[#FFFFFF] font-bold flex justify-center">What Our Clients <a className="text-[#1C4CF6] pl-[15px]">Say</a></p>
                <div className="pt-[120px] flex gap-[2%] pb-[68px]">
                    {ContentList.map((item, index) =>{
                        return <Feedcom item={item} key={index} />
                    })}
                </div>

            </div>
        </>
    )
}
export default Feedback;
