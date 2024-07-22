import "./Learn.css"
import data from "../../Data/Collection"
import { FaPlay } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Learn =()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

    return(
        <div>

          <div className="slider-container">

          <div className="infoTable">
                <h2 class="headlineText">Learn</h2>
                <button class="customBtn">More</button>
            </div>
            <Carousel responsive={responsive}>
            {
                data.map((item , index)=>(
                    
                    <div key={index}>
                    <div className="cards">
                    <img src={item.imageUrl} alt="not found" className="cardImg"/>
                        <p className="description">{item.description}</p>
                        <h2 className="title">
                        {item.title}
                        </h2>
                       <div className="circleMain">
                       <div className="circle">
                        <FaPlay className="playIcon" />
                        </div>
                       </div>
                    <div className="cardData">
                        <div >
                            <h2>{item.chapter}</h2>
                            <p className="chapters">Chapters</p>
                        </div>
                        <div>
                            <h2>{item.items}</h2>
                            <p className="items">Items</p>
                        </div>
                        <div className="percentage">
                            0%
                        </div>
                    </div>
                    </div>
                    </div>
                    
                ))
            }
            </Carousel>

          </div>







        </div>
    )
}

export default Learn;
