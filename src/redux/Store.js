import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlice"
import EventSlice from "./EventSlice"

export const Store = configureStore({
    reducer: {
        usuario: UserSlice,
        evento: EventSlice
    }
})