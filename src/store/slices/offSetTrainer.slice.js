import { createSlice } from "@reduxjs/toolkit";

export const offSetTrinerSlice = createSlice({
    name: 'offsetTrainer',
    initialState: 0,
    reducers: {
        setOffsetTriner: (state, action) => action.payload
    }

})

export const {setOffsetTriner} = offSetTrinerSlice.actions;
export default offSetTrinerSlice.reducer;