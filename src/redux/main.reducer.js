import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cImage:null
}   

const mainSlice = createSlice({
    name:"main",
    initialState,
    reducers:{
        storeImage:(state , action)=>{
            state.cImage = action.payload
        },
        
    }
})
export default mainSlice;
export const {storeImage} = mainSlice.actions;