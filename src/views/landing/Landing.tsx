import Header from './Header';
import Dashboard from './Dashboard';
import Works from "./Works"
import Feedback from './Feedback';
import Footer from './Footer';
import About from "./About";
import Benefit from './Benefit';

const Landing = () => {
    return (
        <>
        <div>
            <div className="bg-[#13131B] px-[70px] lg:px-[128px] overflow-hidden">
                <Header/>
                <Dashboard/>
                <Works/>
                <Benefit/>
                <About/>
                <Feedback/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Landing
