import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Ipad from './Components/Ipad/Ipad';
import Signin from './Components/SignIn/Signin';
import Account from './Components/Account/Account';
import Logout from './Components/Logout/Logout';
import NavbarForExplore from './Components/NavbarForExplore/NavbarForExplore';
import Welcome from './Components/Welcome/Welcome';
import Content from './Components/Content/Content';
import Interview from './Components/Interview/Interview';
import Learn from './Components/Learn/Learn';
import Pcard from './Components/PCard/Pcard';
import Study from './Components/Study/Study';
import Topic from './Components/Topic/Topic';
import SideComponent from './Components/SideComponent/SideComponent';
import Explore from './Pages/Explore/Explore';
import Problem from './Pages/Problem/Problem';
import { Route, Routes } from 'react-router-dom';

const App = () =>{
  return(
    <div>
      
      
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path="/explore" element={<Explore/>} />
        <Route path="/problem" element={<Problem/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
      
      



      
      
      {/* <Logout/> */}
    </div>
  )
}

export default App;
