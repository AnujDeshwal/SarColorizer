import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cImage:null,
    inpImage:null
}   

const mainSlice = createSlice({
    name:"main",
    initialState,
    reducers:{
        storeImage:(state , action)=>{
            state.cImage = action.payload
        },
        storeInp:(state , action)=>{
            state.inpImage = action.payload
        },
        
    }
})
export default mainSlice;
export const {storeImage, storeInp} = mainSlice.actions;