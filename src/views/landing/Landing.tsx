import Header from './Header';
import Dashboard from './Dashboard';
import Works from "./Works"
import Feedback from './Feedback';
import Footer from './Footer';
import About from "./About";

const Landing = () => {
    return (
        <>
            <div className="bg-[#13131B]">
                <Header/>
                <Dashboard/>
                <Works/>
                <About/>
                <Feedback/>
                <Footer/>


            </div>
            {/* <LandingForm disableSubmit={false} /> */}
        </>
    )
}

export default Landing
