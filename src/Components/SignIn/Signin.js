import { useState } from "react";
import "./Signin.css"

const Signin = () =>{

    const [inputEmail , SetInputEmail] = useState('')
    const [inputPassword , SetInputPassword] = useState('')


    function submitForm(e){
        e.preventDefault();

        signInWithEmailAndPassword (auth , inputEmail , inputPassword)
        .then(()=>{
            alert("user login successfully")
            console.log("login")
        })
        .catch((err)=>console.log("something is wrong" , err),
        alert("You have to login first!")
    )


        SetInputEmail('')
        SetInputPassword('')
    }

    function handleEmail(e){
        SetInputEmail(e.target.value);
    }

    function handlePassword(e){
        SetInputPassword(e.target.value)
    }

    function loginWithGoogle(){
        signInWithPopup(auth ,provider)
    }
    
    return(
        <div className="signInPage">
            <form className="signInForm" onSubmit={submitForm}>
                <label for="userEmail">Enter Your Email:</label>
                <input type="email" id="userName" placeholder="Enter Your Email" onChange={handleEmail} value={inputEmail} required/>
                <label for="userPassWord" className="passwordInput">Enter Your Password:</label>
                <input type="password" id="userPassword" placeholder="Enter Your Password" onChange={handlePassword} value={inputPassword} required/>
                <button type="submit" className="SignInBtn">SignIn</button>
            </form>

            <h1>OR</h1>
 
            <button class="bg-primary text-white " onClick={loginWithGoogle}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="not found" className="image-container"/>Login With Google</button>
            
        </div>
    )
}

export default Signin;