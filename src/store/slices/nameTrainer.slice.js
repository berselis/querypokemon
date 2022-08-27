import {createSlice} from '@reduxjs/toolkit';


export const nameTrainer = createSlice({
    name:'nameTrainer',
    initialState: '',
    reducers:{
        setNametrainer: (state, action) => action.payload
    }
})

export const { setNametrainer} = nameTrainer.actions;

export default nameTrainer.reducer