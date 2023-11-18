import { createSlice } from '@reduxjs/toolkit'

const initialValues = {
    evento: null,
}

export const EventSlice = createSlice({
    name: 'evento',
    initialState: initialValues,
    reducers: {
        reducerSetEvento: (state, action) => {
            state.evento = JSON.parse(action.payload.evento)
        }
    }
})

export const { reducerSetEvento } = EventSlice.actions

export default EventSlice.reducer