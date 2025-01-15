
// import React, { useEffect, useState } from "react";
// import Feedcom from "./Feedback/Feedcom";

// const Feedback = () => {
//     const ContentList = [
//         {
//             img: "/img/landing/man2.svg",
//             title: "John D.1",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.2",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
//         },
//         {
//             img: "/img/landing/man2.svg",
//             title: "John D.3",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "John D.4",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
//         },
//         {
//             img: "/img/landing/man2.svg",
//             title: "John D.5",
//             role: "CEO of Startup",
//             text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
//         },
//         {
//             img: "/img/landing/man1.svg",
//             title: "Diana K.6",
//             role: "Investor",
//             text: "GCC Combinator has been a game changer for my investment strategy."
//         }
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const next = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % ContentList.length);
//     };

//     const preview = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + ContentList.length) % ContentList.length);
//     };

//     const length = ContentList.length;

//     const [width, setWidth] = useState(3);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth <= 640) {
//                 setWidth(1);
//             } else {
//                 setWidth(3);
//             }
//         };

//         window.addEventListener('resize', handleResize);

//         // Cleanup function to remove the event listener
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <>
//             <div className="mt-[60px]  pb-[180px]">
//                 <p className="text-[30px] sm:text-[40px] pt-[120px] font-[Geist] text-[#FFFFFF] font-bold flex justify-center pb-[120px]  ">
//                     <span>What Our Clients <span className="text-[#1C4CF6]">Say</span></span>
//                 </p>
//                 <div className="relative ">
//                     <div className="flex gap-[2%] pb-[68px]">
//                         {ContentList.slice(currentIndex % length, ((currentIndex % length) + width) > length ? length : (currentIndex % length) + width).map((item, index) => (
//                             <Feedcom
//                                 item={item}
//                                 key={index}
//                             />
//                         ))}
//                         {((currentIndex % length) + width) > length && ContentList.slice(0, ((currentIndex % length) + width) % length).map((item, index) => (
//                             <Feedcom
//                                 item={item}
//                                 key={index}
//                             />
//                         ))}
//                     </div>
//                     <button
//                         onClick={preview}
//                         className="absolute top-[138px] left-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full"
//                     >
//                         <img
//                             src="./public/img/landing/vector.svg"
//                             alt=""
//                         />
//                     </button>
//                     <button onClick={next} className="absolute top-[138px] right-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full">
//                         <img
//                             src="./public/img/landing/vector1.svg"
//                             alt=""
//                         />
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Feedback;

import React, { useEffect, useState } from "react";
import Feedcom from "./Feedback/Feedcom";

const Feedback = () => {
    const ContentList = [
        {
            img: "/img/landing/man2.svg",
            title: "John D.1",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
        },
        {
            img: "/img/landing/man1.svg",
            title: "John D.2",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
        },
        {
            img: "/img/landing/man2.svg",
            title: "John D.3",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support. The platform is user-friendly and provides all the information I need to make informed decisions!"
        },
        {
            img: "/img/landing/man1.svg",
            title: "John D.4",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
        },
        {
            img: "/img/landing/man2.svg",
            title: "John D.5",
            role: "CEO of Startup",
            text: "GCC Combinator has transformed my investment approach. I’ve discovered innovative healthcare projects that I’m proud to support."
        },
        {
            img: "/img/landing/man1.svg",
            title: "Diana K.6",
            role: "Investor",
            text: "GCC Combinator has been a game changer for my investment strategy."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [width, setWidth] = useState(3);

    const updateWidth = () => {
        setWidth(window.innerWidth <= 640 ? 1 : 3);
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % ContentList.length);
    const preview = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + ContentList.length) % ContentList.length);

    const displayedItems = ContentList.slice(currentIndex, currentIndex + width).concat(
      ContentList.slice(0, Math.max(0, (currentIndex + width) - ContentList.length))
    );

    return (
        <div className="mt-[60px] pb-[180px]">
            <p className="text-[30px] sm:text-[40px] pt-[120px] font-[Geist] text-[#FFFFFF] font-bold flex justify-center pb-[120px]">
                <span>What Our Clients <span className="text-[#1C4CF6]">Say</span></span>
            </p>
            <div className="relative">
                <div className="flex gap-[2%] pb-[68px]">
                    {displayedItems.map((item, index) => (
                        <Feedcom item={item} key={index} />
                    ))}
                </div>
                <button onClick={preview} className="absolute top-[138px] left-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full">
                    <img src="./public/img/landing/vector.svg" alt="Previous" />
                </button>
                <button onClick={next} className="absolute top-[138px] right-[-80px] bg-[#FFFFFF0D] text-white p-[24px] rounded-full">
                    <img src="./public/img/landing/vector1.svg" alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Feedback;


