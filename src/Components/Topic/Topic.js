import { useState } from "react";
import TopicCollection from "../../Data/TopicCollection";
import "./Topic.css"
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";


const Topic = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    function expand(){
        setIsExpanded(true);
    }

    function collapse(){
        setIsExpanded(false);
    }


    return (
        // <div className="expandOuter">

     <div className={`${isExpanded ? 'outer' : 'expandOuter'}`} >


{/* <div className="mainTopicDiv"> */}



<div className={`${isExpanded ? 'mainTopicDivTrue' : 'mainTopicDiv'}`}>


            {
                TopicCollection.map((item, index) => (
                    <div key={index}>
                        <div className="topicCollect">
                            <p>{item.topic}</p>
                            <p className="collect">{item.collection}</p>
                        </div>
                    </div>
                ))
            }

<div className="Collapse" onClick={collapse}>Collapse<FaAngleDoubleUp/>
</div>
          
        </div>

        {/* <div className="expand">
            <p className="down">Expand</p> 
            <FaAngleDoubleDown className="downarrow"/>
            </div> */}



<div className={`${isExpanded ? 'expandNone' : 'expand'}`} onClick={expand}>Expand<FaAngleDoubleDown/>
            </div>

        {/* <FaAngleDoubleDown />

        <FaAngleDoubleUp /> */}


        </div>

    )
}

export default Topic;