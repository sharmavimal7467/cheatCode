
import "./Content.css"
import { FaPlay } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Content = () =>{


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
                <h2 class="headlineText">Contest</h2>
                <button class="customBtn">More</button>
            </div>
        {/* <Slider {...settings}> */}
        <Carousel responsive={responsive}>
            <div>
            <div className="cards">
            <img src="https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png" alt="not found" className="cardImg"/>
                <p className="description">LeetCode's Interview Crash Course</p>
                <h2 className="title">
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
            <img src="https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png" alt="not found" className="cardImg"/>
                {/* <p className="description">LeetCode's Interview Crash Course</p> */}
                <h2 className="title2">
                The LeetCode Beginner's Guide
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>4</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>17</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/top-151-interview-questions/img" alt="not found" className="cardImg"/>
                <p className="description">Easy Collection</p>
                <h2 className="title2">
                Top Interview Questions
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>9</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>48</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/dynamic-programming/img.png" alt="not found" className="cardImg"/>
                <p className="description">Detailed Explanation of</p>
                <h2 className="title2">
                Dynamic Programming
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>6</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>55</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/fun-with-arrays/img" alt="not found" className="cardImg1"/>
                <p className="description">Introduction to Data Structure</p>
                <h2 className="title2">
                Arrays 101
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>6</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>31</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/sql-language/img-1657328656.png" alt="not found" className="cardImg"/>
                <p className="description">Detailed Explanation of</p>
                <h2 className="title2">
                SQL Language
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>4</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>36</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/graph/img.png" alt="not found" className="cardImg"/>
                <p className="description">Detailed Explanation of</p>
                <h2 className="title2">
                Graph
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>6</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>58</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/heap/img.png" alt="not found" className="cardImg"/>
                <p className="description">Detailed Explanation of</p>
                <h2 className="title2">
                Heap
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>4</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>28</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/recursion-i/img" alt="not found" className="cardImg"/>
                <p className="description">Introduction to Algorithms</p>
                <h2 className="title2">
                Recursion I
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>5</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>21</h2>
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
            <img src="https://assets.leetcode.com/explore/cards/machine-learning-101/img" alt="not found" className="cardImg"/>
                <p className="description">Basic Concepts in ML</p>
                <h2 className="title2">
                Machine Learning 101
                </h2>
               <div className="circleMain">
               <div className="circle">
                <FaPlay className="playIcon" />
                </div>
               </div>
            <div className="cardData">
                <div >
                    <h2>3</h2>
                    <p className="chapters">Chapters</p>
                </div>
                <div>
                    <h2>9</h2>
                    <p className="items">Items</p>
                </div>
                <div className="percentage">
                    0%
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

export default Content;

