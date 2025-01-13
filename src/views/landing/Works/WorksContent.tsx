// import WorksConmap from "./WorksConmap"  


// const WorksContent = () => {

//     const ContentList = [
//         {

//             img: "/img/landing/search.png",
//             Order: "1",
//             title: "Explore New Projects",
//             text: "Discover a variety of medical startups showcasing their unique ideas and projects. Review detailed descriptions and potential impacts on healthcare. Present your healthcare project to crypto investors, sharing your vision and goals"
//         },
//         {

//             img: "/img/landing/goal.png",
//             Order: "2",
//             title: "Engage and Evaluate",
//             text: "Analyze project details, including tokenomics and roadmaps. Make informed decisions by assessing each startup’s success potential. Connect with interested investors. Answer questions and provide insights to help them understand your vision.",
//         },
//         {

//             img: "/img/landing/launch.png",
//             Order: "3",
//             title: "Invest and Launch Tokens",
//             text: "Purchase tokens securely through our platform, enabling you to contribute to the growth of innovative healthcare solutions. Utilize our platform to launch your tokens, allowing investors to support your project financially and help bring your vision to life",
//         },
//         {

//             img: "/img/landing/diagram.png",
//             Order: "4",
//             title: "Track Progress & Grow Together",
//             text: "Monitor your investments and stay updated on project milestones and developments through our dashboard. Leverage raised funds to develop your project, reach milestones, and make a difference in healthcare.",
//         }
//     ]
//     return (
//         <>
//             <div className="flex  w-full pl-[128px] pr-[112px] gap-[3%] bg-[pink]">
//               {ContentList.map((item, index) => {
//                 return <WorksConmap item={item} key={index} />
//                })}
//             </div>


//         </>
//     )
// }
// export default WorksContent;


// WorksContent.tsx

import WorksConmap from "./WorksConmap";

const WorksContent = () => {
    const ContentList = [
        {
            img: "/img/landing/search.png",
            Order: "1",
            title: "Explore New Projects",
            text: "Discover a variety of medical startups showcasing their unique ideas and projects. Review detailed descriptions and potential impacts on healthcare. Present your healthcare project to crypto investors, sharing your vision and goals"
        },
        {
            img: "/img/landing/goal.png",
            Order: "2",
            title: "Engage and Evaluate",
            text: "Analyze project details, including tokenomics and roadmaps. Make informed decisions by assessing each startup’s success potential. Connect with interested investors. Answer questions and provide insights to help them understand your vision.",
        },
        {
            img: "/img/landing/launch.png",
            Order: "3",
            title: "Invest and Launch Tokens",
            text: "Purchase tokens securely through our platform, enabling you to contribute to the growth of innovative healthcare solutions. Utilize our platform to launch your tokens, allowing investors to support your project financially and help bring your vision to life",
        },
        {
            img: "/img/landing/diagram.png",
            Order: "4",
            title: "Track Progress & Grow Together",
            text: "Monitor your investments and stay updated on project milestones and developments through our dashboard. Leverage raised funds to develop your project, reach milestones, and make a difference in healthcare.",
        }
    ];

    return (
        <div className="flex flex-wrap justify-between w-full  gap-[2%] ">
            {ContentList.map((item, index) => (
                <WorksConmap item={item} key={index} />
            ))}
        </div>
    );
};

export default WorksContent;
