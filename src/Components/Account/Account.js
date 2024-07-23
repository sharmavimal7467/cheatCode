import { useState } from 'react';
import './Account.css'


const Account = () =>{

    const [inputEmail , SetInputEmail] = useState('')
    const [inputPassword , SetInputPassword] = useState('')
    const [inputName , SetInputName] = useState('')
    const [inputNumber , SetInputNumber] = useState('')


    function submitForm(e){
        e.preventDefault();

        createUserWithEmailAndPassword (auth , inputEmail , inputPassword)
        .then(()=>{
            alert("successfully create account")
            console.log("successfully create account")
        })
        .catch((err)=>console.log("something is wrong" , err),
        alert("You have to login first!")
    )


        SetInputEmail('')
        SetInputPassword('')
        SetInputName('')
        SetInputNumber('')
    }

    function handleEmail(e){
        SetInputEmail(e.target.value);
    }

    function handlePassword(e){
        SetInputPassword(e.target.value)
    }

    function handleName(e){
        SetInputName(e.target.value)
    }

    function handleNumber(e){
        SetInputNumber(e.target.value)
    }

    
    function loginWithGoogle(){
        signInWithPopup(auth ,provider)
    }

    return(
        <div className="accountPage">
             <form className="accountForm" onSubmit={submitForm}>

             <label htmlFor="userName" className="passwordInput">Enter Your Name:</label>
             <input type="text" id="userName" placeholder="Enter Your Name" onChange={handleName} value={inputName} required/>

             <label htmlFor="userNumber" className="passwordInput">Enter Your Email:</label>
                <input type="text" id="userNumber" placeholder="Enter Your Mobile" onChange={handleNumber} value={inputNumber} required/>

                <label htmlFor="userEmail" className="passwordInput">Enter Your Email:</label>
                <input type="email" id="userEmail" placeholder="Enter Your Email" onChange={handleEmail} value={inputEmail} required/> 

                <label htmlFor="userPassWord" className="passwordInput">Enter Your Password:</label>
                <input type="password" id="userPassword" placeholder="Enter Your Password" onChange={handlePassword} value={inputPassword} required/>

                <button type="submit" className="SignInBtn">SignIn</button>
            </form>

            <h1>OR</h1>

            <button class="bg-primary text-white" onClick={loginWithGoogle}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="not found" className="image-container"/>Login With Google</button>
        </div>
    )
}

export default Account;