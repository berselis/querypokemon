import {createSlice} from '@reduxjs/toolkit';


export const nameTrainerSlice = createSlice({
    name:'nameTrainer',
    initialState: '',
    reducers:{
        setNametrainer: (state, action) => action.payload
    }
})

export const { setNametrainer} = nameTrainerSlice.actions;

export default nameTrainerSlice.reducer