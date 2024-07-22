import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Ipad from './Components/Ipad/Ipad';
import Signin from './Components/SignIn/Signin';
import Account from './Components/Account/Account';
import Logout from './Components/Logout/Logout';
import LandingPage from './Pages/LandingPage/LandingPage';
import NavbarForExplore from './Components/NavbarForExplore/NavbarForExplore';
import Welcome from './Components/Welcome/Welcome';
import Content from './Components/Content/Content';
import Interview from './Components/Interview/Interview';
import Learn from './Components/Learn/Learn';
import Pcard from './Components/PCard/Pcard';
import Study from './Components/Study/Study';
import Topic from './Components/Topic/Topic';
import SideComponent from './Components/SideComponent/SideComponent';
import Problem from './Pages/Problem/Problem';

const App = () =>{
  return(
    <div>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Ipad/> */}
      {/* <Signin/>
      <Account/>
      <Logout/> */}
      {/* <LandingPage/> */}
      <NavbarForExplore/>
       {/* <Welcome/>
      <Content/>
      <Interview/>
      <Learn/> */}
      {/* <Pcard/>
      <Study/>
      <Topic/>
      <SideComponent/> */}
      <Problem/>
    </div>
  )
}

export default App;
