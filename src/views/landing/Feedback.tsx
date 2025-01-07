// import Feedcom from "./Feedback/Feedcom"

// const Feedback = () => {

//     const ContentList = [
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.",
//             role:  "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

//         },
//         {
//             img: "/img/landing/man2.svg",
//             title: "John D.",
//             role:  "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.",
//             role:  "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.",
//             role:  "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.",
//             role:  "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.",
//             role:  "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"

//         }
//     ]
//     return (
//         <>
//             <div className="mt-[60px] px-[128px] mb-[180px]">
//                 <p className="text-[40px] pt-[120px] font-[Geist] text-[#FFFFFF] font-bold flex justify-center">What Our Clients <a className="text-[#1C4CF6] pl-[15px]">Say</a></p>
//                 <div >
//                     <div className="pt-[120px] flex gap-[2%] pb-[68px]">
//                         {ContentList.map((item, index) =>{
//                             return <Feedcom item={item} key={index} />
//                         })}
//                     </div>
//                     <div>

//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }
// export default Feedback;




// import React, { useState } from "react";
// import Feedcom from "./Feedback/Feedcom";

// const Feedback = () => {
//     const ContentList = [
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. "
//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John .",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "ohn D.",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. "
//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "n D.",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. "
//         },
//         {
//             img: "/img/landing/man6.svg",
//             title: "Diana K.",
//             role: "Investor",
//             text: "GCC Combinator has been a game changer for my investment strategy."
//         }
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const next = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 3) % ContentList.length);
//     };

//     const preview = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 3 + ContentList.length) % ContentList.length);
//     };

//     return (
//         <>
//             <div className="mt-[60px] px-[128px] mb-[180px]">
//                 <p className="text-[40px] pt-[120px] font-[Geist] text-[#FFFFFF] font-bold flex justify-center pb-[120px] ">
//                     What Our Clients <a className="text-[#1C4CF6] pl-[15px]">Say</a>
//                 </p>
//                 <div className="relative ">
//                     <div className="flex gap-[2%] pb-[68px]">
//                         {ContentList.slice(currentIndex, currentIndex + 3).map((item, index) => (
//                             <Feedcom item={item} key={index} />
//                         ))}
//                     </div>
//                     <button onClick={preview} className="absolute top-[138px] left-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full">
//                         <img src="./public/img/landing/vector.svg"  alt="" />
//                     </button>
//                     <button onClick={next} className="absolute top-[138px] right-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full">
//                         <img src="./public/img/landing/vector1.svg" alt="" />
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Feedback;



import React, { useState } from "react";
import Feedcom from "./Feedback/Feedcom";

const Feedback = () => {
    const ContentList = [
        {
            img: "/img/landing/man1.svg",
            title: "John D.",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
        },
        {
            img: "/img/landing/man1.svg",
            title: "John D.",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
        },
        {
            img: "/img/landing/man1.svg",
            title: "John D.",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
        },
        {
            img: "/img/landing/man1.svg",
            title: "John D.",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
        },
        {
            img: "/img/landing/man1.svg",
            title: "John D.",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
        },
        {
            img: "/img/landing/man6.svg",
            title: "Diana K.",
            role: "Investor",
            text: "GCC Combinator has been a game changer for my investment strategy."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % ContentList.length);
    };

    const preview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + ContentList.length) % ContentList.length);
    };

    return (
        <>
            <div className="mt-[60px] px-[128px] mb-[180px]">
                <p className="text-[40px] pt-[120px] font-[Geist] text-[#FFFFFF] font-bold flex justify-center pb-[120px] ">
                    What Our Clients <a className="text-[#1C4CF6] pl-[15px]">Say</a>
                </p>
                <div className="relative ">
                    <div className="flex gap-[2%] pb-[68px]">
                        {ContentList.slice(currentIndex, currentIndex + 3).map((item, index) => (
                            <Feedcom item={item} key={index} />
                        ))}
                    </div>
                    <button onClick={preview} className="absolute top-[138px] left-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full">
                        <img src="./public/img/landing/vector.svg" alt="" />
                    </button>
                    <button onClick={next} className="absolute top-[138px] right-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full">
                        <img src="./public/img/landing/vector1.svg" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Feedback;

