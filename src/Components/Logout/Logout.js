import { auth } from '../../firebase'
import './Logout.css'
import {signOut } from "firebase/auth"

const Logout = () =>{

    function signout(){
        signOut(auth).then(()=>{
            alert("useer log out successfully")
        })
        .catch((err)=>{console.error("log out" , err);
            alert("log out successfully")})
    }

    return(
        <div>
                <button onClick={signout}>logout</button>
        </div>
    )
}

export default Logout;