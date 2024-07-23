import Content from "../../Components/Content/Content";
import Interview from "../../Components/Interview/Interview";
import Learn from "../../Components/Learn/Learn";
import NavbarForExplore from "../../Components/NavbarForExplore/NavbarForExplore";
import Welcome from "../../Components/Welcome/Welcome";


const Explore = () =>{
    return(
        <div>

<NavbarForExplore/>
        <Welcome/> 
      <Content/>
      <Interview/>
      <Learn/>

        </div>
    )
}

export default Explore;