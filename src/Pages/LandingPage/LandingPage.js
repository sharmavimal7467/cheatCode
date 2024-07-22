
import Hero from "../../Components/Hero/Hero";
import Ipad from "../../Components/Ipad/Ipad";
import "./LandingPage.css"

const LandingPage =() =>{
    return(
        <div>
        <Hero className="heroComp" />
        <Ipad className="ipadComp" />
    </div>
    )
}

export default LandingPage;