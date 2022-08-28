import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";
import offsetTrainer from "./slices/offSetTrainer.slice";
export default configureStore({
    reducer:{
        nameTrainer,
        offsetTrainer
    }
})