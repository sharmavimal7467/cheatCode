import "./TrendCompany.css"
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import TrendingCompany from "../../Data/TrendingCompany";
import { useEffect, useState } from "react";


const TrendCompany = () =>{

    const[inputText , SetInputText] = useState('')
    const[filterTrendComp , SetFilterTrendComp] = useState([])

    function inputValue(e){
        e.preventDefault();
        SetInputText(e.target.value)
    }

    useEffect(()=>{
        filterArray(inputText)  
    },[inputText])

    console.log(inputText)

    function filterArray(inputText){
        const lowerCaseSearchTerm = inputText.toLowerCase();

        const filteredTrendCompany = TrendingCompany.filter((item,index)=>(
            item.company.toLowerCase().includes(lowerCaseSearchTerm)
        ))

        SetFilterTrendComp(filteredTrendCompany)

    }


    console.log(filterTrendComp)



    return(
        <div className="outerTrend">
            <div className="mainTrend">
                    <div className="company">
                        <p className="trending">Trending Companies</p>
                        {/* <div className="arrow">
                        <RiArrowLeftWideLine />
                        <RiArrowRightWideLine />
                        </div> */}
                    </div>
                    <div className="inputArea">
                    <IoSearch />
                        <input type="text" placeholder="Search for a company..." className="inputSearch" onChange={inputValue}/>
                    </div>

                    {/* ||TrendingCompany */}

                    <div className="setCards">
                    {
                        filterTrendComp.map((item,index)=>(
                            // <div  className="setCards">
                                        <div key={index} className="cardTrendCompany">
                        <p className="Company">{item.company}</p>
                        <p className="questions">{item.questions}</p>
                    </div>
                                // </div>
                        ))
                    }
                    </div>

                    
                    {/* <div className="cardTrendCompany">
                        <p className="Company">Apple</p>
                        <p className="questions">1652</p>
                    </div> */}
            </div>
        </div>
    )
}

export default TrendCompany;