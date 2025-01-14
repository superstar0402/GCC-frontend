import Button from '@/components/ui/Button'

const About = () => {

    return (
        <>
            <div className="mt-[60px] pb-[80px] ">

                <div className="pt-[80px] pb-[60px]">
                    <p className="text-[40px] text-[#FFFFFF] font-[Geist] flex justify-center font-bold">
                        About <a className="text-[#1C4CF6] pl-3">Us</a>
                    </p>
                </div>

                <p className="text-[16px] font-[Geist] text-[#FFFFFF]">Welcome to GCC Combinator, where innovation meets investment! We are a pioneering platform designed to bridge the gap between visionary medical startups and crypto investors. Our mission is to empower groundbreaking ideas in the healthcare sector by providing a unique space for startups to showcase their projects and for investors to discover and support the next big thing in medical technology.
                </p>

                <div className="pt-[36px] font-[Geist] text-[#FFFFFF] text-[16px]">
                    <p className="text-[20px] font-bold pb-[24px]">Our Vision</p>
                    <p>At GCC Combinator, we believe that the future of healthcare lies in collaboration and innovation. By connecting crypto investors with promising medical startups, we aim to foster a community that drives advancements in health technology and improves patient outcomes.
                    </p>
                    <Button
                        variant="solid"
                        className='w-[278px] bg-[#1C4CF6] h-[40px] rounded-[8px] mt-[24px] text-[14px]'>
                        Explore Our Whitepaper
                    </Button>
                </div>

                <p className='pb-[24px] mt-[36px] font-[Geist] text-[#FFFFFF] font-bold text-[20px]' >Meet Our CEO & Founder</p>

                <div className=' flex flex-col lg:flex-row gap-[5%] w-full'>
                    <div className='w-[100%] lg:w-[25%] font-[Geist] text-[#FFFFFF] font-bold text-[20px]  flex flex-col justify-center items-center pb-[30px] lg:pb-[0px]'>
                        <img
                            src='./public/img/landing/CEO.png'
                            className='w-[213px] h-[260px] pl-[5%] '
                            alt=''
                        />
                        <p className='pt-[16px] pb-[8px]'>Dr. Abdulmohsen Hameed</p>
                        <p className='text-[16px]'>CEO & Founder of GCC Combinator </p>
                    </div>
                    <div className=' w-[100%] lg:w-[75%] font-[Geist] font-bold italic text-[16px] text-[#FFFFFF]'>
                        <p>"Welcome to GCC Combinator! I am thrilled to introduce you to our platform, where we harness the power of blockchain technology to revolutionize the way medical startups connect with investors.<br></br>
                            In today's fast-paced world, the healthcare industry is in desperate need of innovative solutions. Our mission is to create a seamless environment where groundbreaking ideas can flourish. We provide medical startups with the opportunity to launch their projects and tokens, enabling them to reach the investors who believe in their vision.
                            As an investor, you have the chance to be part of this transformative journey. Our platform allows you to explore a diverse range of projects, each with the potential to make a significant impact on the healthcare landscape. By investing in these startups, you are not just supporting their growth; you are contributing to a healthier future for all.<br></br>
                            Join us as we embark on this exciting journey to reshape the future of healthcare through innovation and investment. Together, we can make a difference!"</p>
                        <div className='mt-[39px] flex gap-[12px]'>
                            <img src="./public/img/landing/facebook.png" alt="" />
                            <img src="./public/img/landing/linkedin.png" alt="" />
                            <img src="./public/img/landing/youtube.png" alt="" />
                            <img src="./public/img/landing/twitter.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default About;