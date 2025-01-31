
import Button from '@/components/ui/Button';
import Benefitcom from "./Benefit/Benefitcom"

const Benefit = () => {
    const ContentList = [
        {
            img: "/img/landing/roadmap1.png",
            title: "1. Access to Innovative Startups",
            text: "As a member of GCC Combinator, you will gain exclusive access to a curated selection of groundbreaking medical startups. These innovative projects are at the forefront of healthcare technology, offering unique solutions that can significantly improve patient outcomes. By joining us, you can explore a diverse range of ideas that are reshaping the future of medicine."
        },
        {
            img: "/img/landing/roadmap2.png",
            title: "2. Investment Opportunities",
            text: "GCC Combinator provides you with the chance to participate in early-stage investments by purchasing tokens directly from promising startups. This unique opportunity allows you to diversify your investment portfolio while supporting the next generation of healthcare solutions. By investing early, you position yourself to potentially reap significant rewards as these startups grow and succeed in the competitive healthcare market.",
            reverse: true 
        },
        {
            img: "/img/landing/roadmap3.png",
            title: "3. Expert Guidance",
            text: "Navigate the complexities of the crypto and healthcare sectors with confidence, thanks to the expert guidance available through GCC Combinator. Our platform connects you with seasoned investors and industry professionals who offer valuable insights and mentorship. Whether you’re new to investing or looking to enhance your strategy, our resources and support will empower you to make informed decisions."
        },
        {
            img: "/img/landing/roadmap4.png",
            title: "4. Community Engagement",
            text: "Join a vibrant and dynamic community of like-minded investors, entrepreneurs, and healthcare innovators. At GCC Combinator, you’ll have the opportunity to engage in meaningful discussions, share ideas, and collaborate with others who share your passion for transforming healthcare through technology. Building connections within this community can lead to new partnerships, investment opportunities, and a deeper understanding of the industry.",
            reverse: true
        }
    ];

    return (
        <>
            <div className="pt-[40px] md:pt-[120px] h-[100%]">
                <p className="pb-[20px] sm:pb-[80px] font-Geist text-[30px] sm:text-[40px] font-bold text-[#FFFFFF] text-center">
                    <a className="text-[#1C4CF6] ">
                        Benefits
                    </a> of Joining Us
                </p>
                <div className="flex flex-col gap-[60px]">
                    {ContentList.map((item, index) => (
                        <Benefitcom item={item} key={index} />
                    ))}
                </div>
                <div className='pt-[80px] flex justify-center md:justify-end pb-[0px] md:pb-[120px]'>
                    <Button
                        variant="solid"
                        className='rounded-[10px] text-[14px] bg-[#1C4CF6] w-[200px] h-[40px] justify-center items-center flex'
                    >
                        Join Us
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Benefit;
