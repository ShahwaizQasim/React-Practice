import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        reset: (state) => {
            state.value = 0
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload // payload ka matlab hai jitna number add karna hai
        },
    },
})

// Action ek simple object hota hai jo store ko batata hai ke kya update karna hai.
// Redux Toolkit me createSlice automatically actions generate karta hai.
// Actions dispatch kiye jate hain taake reducer state update kare.

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer