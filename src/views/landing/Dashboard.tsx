// import { Button } from "react-scroll";
import Button from '@/components/ui/Button'

const Dashboard = () => {
    return (
        <>
            <div className="pt-[150px] lg:pt-[200px] ">
                <div className="flex flex-col lg:flex-row w-[100%]">
                    <div className="w-[100%] lg:w-[50%]">
                        <p className=" text-[30px]  xl:text-[43px] 2xl:text-[50px]  pb-[60px] font-[Geist] font-bold text-[#FFFFFF] w-[80%]">Empowering Innovation in Healthcare with <a className="text-[#1C4CF6] font-bold">GCC Combinator</a></p>
                        <p className="text-[20px] 2xl:text-[30px] text-[#FFFFFF] font-[Geist]">Join GCC Combinator, the premier platform that bridges crypto investors with groundbreaking medical startups. Discover innovative projects, explore unique ideas, and invest in the future of healthcare by purchasing tokens directly from startups.</p>
                        <Button
                            variant="solid"
                            className='mt-[60px] rounded-[10px] text-[14px] bg-[#1C4CF6] w-[200px] h-[40px]'>
                            Join Us
                        </Button>
                    </div>
                    <div className=" flex items-center justify-center w-[100%] lg:w-[50%] mt-[50px] lg:mt-[-60px]  ">
                        <div className='w-[70%]  lg:w-[100%]'>
                            <img src="./public/img/landing/dashboard.png" className='mx-auto' alt="dashboard"
                            />
                        </div>

                    </div>

                </div>

                <div className='flex flex-col lg:flex-row  justify-center gap-[15%] mt-[120px] w-[100%] px-[30px] pb-[60px] '>
                    <div className=' w-[100%] lg:w-[50%] gap-[20%] flex justify-center items-center'>
                        <img
                            src="./public/img/landing/binance.png"
                            className='w-[35%]  '
                            alt='binance'
                        />
                        <img
                            src="./public/img/landing/novartis.png"
                            className='w-[35%]'
                            alt='novartis' />
                    </div>
                    <div className='w-[100%] pt-[80px] lg:pt-[0px] lg:w-[50%] gap-[20%] flex justify-center items-center'>
                        <img
                            src="./public/img/landing/alphabet.png"
                            className='w-[25%] '
                            alt='alphabet' />
                        <img
                            src="./public/img/landing/medtronic.png"
                            className='w-[25%] '
                            alt='medtronic' />
                    </div>
                </div>
            </div>


        </>
    )
}
export default Dashboard;
