import {configureStore} from "@reduxjs/toolkit"
import  counterreducer  from "./slice"
export const stor = configureStore({
    reducer : {
        allcart: counterreducer,
    }
})
export type RootState = ReturnType<typeof stor.getState>
