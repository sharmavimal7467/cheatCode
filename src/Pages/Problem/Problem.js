import NavbarForExplore from "../../Components/NavbarForExplore/NavbarForExplore";
import Pcard from "../../Components/PCard/Pcard";
import SideComponent from "../../Components/SideComponent/SideComponent";
import Study from "../../Components/Study/Study";
import Topic from "../../Components/Topic/Topic";
import "./Problem.css"

const Problem = () =>{
    return(

        <div>
                <NavbarForExplore/>


<div className="Problem">
<div>
<Pcard/>
      <Study/>
      <Topic/>
</div>
    <div>
    <SideComponent/>
    </div>

</div>


        </div>

    )
}

export default Problem;