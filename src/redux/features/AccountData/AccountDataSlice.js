import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    loading:false,
    posts:[],
    error:""
}



export const fetchSignIn = createAsyncThunk("AccountData/fetchSignIn",async(SignInValueData)=>{
    console.log(SignInValueData)
    console.log(SignInValueData.nameValue)
    console.log(SignInValueData.emailValue)
    console.log(SignInValueData.passwordValue)
    console.log(SignInValueData.confirmPasswordValue)


    



    if(SignInValueData.nameValue!="" && SignInValueData.emailValue!="" && SignInValueData.passwordValue!="" && SignInValueData.passwordValue == SignInValueData.confirmPasswordValue){

        console.log(SignInValueData.nameValue)
        console.log(SignInValueData.emailValue)
        console.log(SignInValueData.passwordValue)

        return await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
        name:SignInValueData.nameValue,
        email:SignInValueData.emailValue,
        password:SignInValueData.passwordValue
    })
    .then((response)=>response.data)
    }
   
    
})


const AccountDataSlice = createSlice({
    name:"signin",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchSignIn.pending,(state)=>{
             state.loading=true
        })
        builder.addCase(fetchSignIn.fulfilled,(state,action)=>{
            state.loading = false
            state.posts = action.payload ? action.payload : []
            state.error = ""
        })
        builder.addCase(fetchSignIn.rejected,(state,action)=>{
            state.loading = false
            state.posts=[]
            state.error = action.error.message
        })
    }
})

export default AccountDataSlice.reducer;