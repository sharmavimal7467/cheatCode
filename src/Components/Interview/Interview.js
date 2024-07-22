import "./Interview.css"


import { FaPlay } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Interview = () =>{


    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //   };

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
                <h2 class="headlineText">Interview</h2>
                <button class="customBtn">More</button>
            </div>
        {/* <Slider {...settings}> */}
        <Carousel responsive={responsive}>
            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/cheatsheets/img-1674082113.png" alt="not found" className="cardImg"/>
                <p className="description">LeetCode's Interview Crash Course</p>
                <h2 className="title">
                Cheatsheets
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>1</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>3</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    0%
                </div>
            </div>
            </div>
            </div>


            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png" alt="not found" className="cardImg"/>
                <p className="description">LeetCode's Interview Crash Course</p>
                <h2 className="title2">
                Data Structures and Algorithms
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>13</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>149</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    0%
                </div>
            </div>
            </div>
            </div>

            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png" alt="not found" className="cardImg"/>
                <p className="description">LeetCode's Interview Crash Course</p>
                <h2 className="title2">
                System Design for Interviews and Beyond
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>16</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>81</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    0%
                </div>
            </div>
            </div>
            </div>

           
            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/google/img" alt="not found" className="cardImg"/>
                <span className="description">Get Well Prepared for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="premium">Premium</span></span>
                
                <h2 className="title2">
                Google Interview
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaLock className="playIcon1" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>9</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>85</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    Locked
                </div>
            </div>
            </div>
            </div>

            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/facebook/img" alt="not found" className="cardImg1"/>
                <span className="description">Get Well Prepared for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="premium">Premium</span></span>
                
                <h2 className="title2">
                Facebook
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaLock className="playIcon1" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>7</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>79</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    Locked
                </div>
            </div>
            </div>
            </div>

            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/microsoft/img" alt="not found" className="cardImg"/>
                <span className="description">Get Well Prepared for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="premium">Premium</span></span>
                
                <h2 className="title2">
                Microsoft
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaLock className="playIcon1" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>8</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>58</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    Locked
                </div>
            </div>
            </div>
            </div>

            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/amazon/img" alt="not found" className="cardImg"/>
                <span className="description">Get Well Prepared for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="premium">Premium</span></span>
                
                <h2 className="title2">
                Amazon
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaLock className="playIcon1" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>8</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>68</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    Locked
                </div>
            </div>
            </div>
            </div>


            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/apple/img" alt="not found" className="cardImg"/>
                <span className="description">Get Well Prepared for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="premium">Premium</span></span>
                
                <h2 className="title2">
                Apple Interview
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaLock className="playIcon1" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>8</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2></h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    Locked
                </div>
            </div>
            </div>
            </div>

          
            {/* </Slider> */}
            </Carousel>
        </div>
          

       </div>
    )
}

export default Interview;



