
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

            <div className="imageDiv">
            <img src="https://media.istockphoto.com/id/1471892181/photo/cartoon-gesture-icon-mockup-cartoon-character-hands-clapping-or-applause-with-loud-noise-3d.jpg?s=1024x1024&w=is&k=20&c=KMYRxN1YXckC_yl3x6v-CJVvMs2Oe4xGaPP5JfRM_8M=" alt="Image Not Found" className="clapEmoji"/>

            <div >
            <h1 className="buddy"> Welcome Buddy.</h1>
            <h1 className="buddy2">Let's Start Your Journey</h1>
            </div>
            </div>

        </div>
    )
}

export default Hero