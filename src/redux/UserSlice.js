import { createSlice } from '@reduxjs/toolkit'

const initialValues = {
    usuario: null,
}

export const UserSlice = createSlice({
    name: 'usuario',
    initialState: initialValues,
    reducers: {
        reducerSetUsuario: (state, action) => {
            state.usuario = JSON.parse(action.payload.usuario)
        }
    }
})

export const { reducerSetUsuario } = UserSlice.actions

export default UserSlice.reducer