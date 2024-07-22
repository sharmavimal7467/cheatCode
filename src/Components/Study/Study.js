import "./Study.css"
import StudyCardsData from "../../Data/StudyCardsData";


const Study = () => {
    return (
       <div>
         <div className="studyPlan">
        <h2>Study Plan</h2>
        <a className="seeAll">See all</a>
    </div>
        <div className="mainStudyDiv">
           
            {
                StudyCardsData.map((item, index) => (
                    <div key={index}>
                        <div className="studyCard">
                            <div>
                                <img src={item.imgUrl} alt="not found" className="studyCardImg" />
                            </div>
                            <div>
                                <p className="text-body">{item.body}</p>
                                <p className="text-caption">{item.caption}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
       </div>
    )
}

export default Study;