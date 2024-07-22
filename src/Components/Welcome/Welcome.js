
import "./Welcome.css"
import { FaRegStar } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";

const Welcome = () =>{
    return(
        <div className="customWidth">
                <p className="welcome">
                    Welcome to 
                </p>
                <div class="d-flex align-items-center justify-content-between ">
                    <h2 className="cheatCode">
                         CheatCode Explore
                    </h2>
                    <div className="icons">
                    <FaRegStar />
                    <BsStopwatch />
                    </div>
                </div>
        </div>
    )
}

export default Welcome;