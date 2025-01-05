// import { Button } from "react-scroll";
import Button from '@/components/ui/Button'

const Dashboard = () => {
    return (
        <>
            <div className="pt-[112px] pl-[128px] pr-[128px]">
                <div className="flex flex-col md:flex-row w-[100%]">
                    <div className="w-[100%] md:w-[50%]">
                        <p className=" text-[30px]  xl:text-[43px] 2xl:text-[50px]  pb-[60px] font-[Geist] font-bold text-[#FFFFFF] w-[80%]">Empowering Innovation in Healthcare with <a className="text-[#1C4CF6] font-bold">GCC Combinator</a></p>
                        <p className="text-[20px] 2xl:text-[30px] text-[#FFFFFF] font-[Geist]">Join GCC Combinator, the premier platform that bridges crypto investors with groundbreaking medical startups. Discover innovative projects, explore unique ideas, and invest in the future of healthcare by purchasing tokens directly from startups.</p>
                        <Button 
                          variant="solid" 
                          className='mt-[60px] rounded-[10px] text-[14px] bg-[#1C4CF6] w-[200px] h-[40px]'>
                            Join Us
                        </Button>
                    </div>
                    <div className=" flex justify-center w-[100%] md:w-[50%] mt-[-60px] md:h-auto ">
                        <img src="./public/img/landing/dashboard.png" 
                            className=" w-[528px] 2xl:w-[600px] " 
                            alt="" 
                        />
                        
                    </div>

                </div>

                <div className='flex flex-row justify-between mt-[120px]'>
                    <img src="./public/img/landing/binance.png" alt=''/>
                    <img src="./public/img/landing/novartis.png" alt=''/>
                    <img src="./public/img/landing/alphabet.png" alt=''/>
                    <img src="./public/img/landing/medtronic.png" alt=''/>
                </div>
            </div>


        </>
    )
}
export default Dashboard;
