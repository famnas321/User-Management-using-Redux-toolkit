import { createSlice } from "@reduxjs/toolkit";

import { UserData } from "./fakeData";
const userSlice=createSlice({
    name:"User",
    initialState:{value:UserData},
    reducers:{
        addUser:(state,action)=>{
            state.value.push(action.payload)
         
        },
        deleteUser:(state,action)=>{
            state.value =state.value.filter((user)=>user.id!==action.payload.id)
        },
        updateUserName:(state,action)=>{
            state.value.map((user)=>{
                if(user.id === action.payload.id){
                user.userName = action.payload.username
                }
            })
        }
    }
})
export const {addUser,deleteUser,updateUserName}=userSlice.actions
export default userSlice.reducer