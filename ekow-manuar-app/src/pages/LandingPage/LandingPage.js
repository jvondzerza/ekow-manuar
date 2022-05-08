import Navbar from "../../components/block/Navbar/Navbar";
import Footer from "../../components/block/Footer/Footer";
import Section from "../../components/container/Section/Section";

const LandingPage = () => {
    return (
        <div className={'relative'}>
            <Navbar/>
            <Section />
            <Footer/>
        </div>
    )
}

export default LandingPage;