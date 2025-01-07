import Header from './Header';
import Dashboard from './Dashboard';
import Works from "./Works"
import Feedback from './Feedback';
import Footer from './Footer';
import About from "./About";

const Landing = () => {
    return (
        <>
        <div>
            <div className="bg-[#13131B] px-[70px] lg:px-[128px]">
                <Header/>
                <Dashboard/>
                <Works/>
                <About/>
                <Feedback/>
            </div>
            <Footer/>
        </div>
            {/* <LandingForm disableSubmit={false} /> */}
        </>
    )
}

export default Landing
