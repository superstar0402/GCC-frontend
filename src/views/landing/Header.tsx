import Tabs from '@/components/ui/Tabs'
import Button from '@/components/ui/Button'

const { TabNav, TabList, TabContent } = Tabs

const Header = () => {
    return (
        <>
          
            <div className="flex justify-between items-center h-[88px] bg-[#13131B] pl-[128px] pr-[128px] drop-shadow-2xl">
                <div>
                    <p className='text-4xl font-bold text-[#1C4CF6]'>GCC</p>
                    <p className='text-white font-bold'>Combinator</p>
                </div>
                <div className='flex flex-row gap-[60px]'>
                    <div  >
                        <Tabs defaultValue="tab1" >
                            <TabList className='gap-[60px]'>
                                <TabNav 
                                    value="tab1" 
                                    className=' text-white text-[16px]'
                                 >
                                    Home
                                </TabNav>
                                <TabNav 
                                    value="tab2" 
                                    className='text-white text-[16px]'
                                >
                                    How it works
                                </TabNav>
                                <TabNav 
                                    value="tab3" 
                                    className='text-white text-[16px]'
                                >
                                    Contact Us
                                </TabNav>
                            </TabList>
                        </Tabs>
                    </div>
                    <div className='flex flex-row gap-10 items-center'>
                        <Button 
                            variant="solid"  
                            className='rounded-[10px] text-[14px] bg-[#1C4CF6]'
                        >
                            Join Us
                        </Button>    
                        <TabNav 
                            value="solid" 
                            className='text-white text-[14px]' 
                        >
                            Log in
                        </TabNav>
                    </div>
                </div>

            </div>
            


        </>
    )
}
export default Header;
