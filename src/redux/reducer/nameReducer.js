import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    firstName:"",
    lastName:"",
}

const studentName=createSlice({
    name:'studentName',
    initialState,
    reducers : {
        fetchFirstName :(state,action) =>{
            state.firstName =state.firstName + action.payload;
        },
        fetchLastName :(state,action) => {
            state.lastName =state.lastName + action.payload;
        }
    }
})

export default studentName.reducer;
export const {fetchFirstName,fetchLastName} = studentName.actions;