
import Navbar from "../Navbar/Navbar"
import "./Hero.css"
import Ipad from "../Ipad/Ipad"

const Hero = () =>{
    return(
        <div className="mainDiv">
                <Navbar/>
            <div className="content-wrapper">

                <div>
                    <div>
                        <div className="landing-base">
                                <div className="header">
                                    <div className="background">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

            <Ipad className="ipadComp"/>

        </div>
    )
}

export default Hero