
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    number: 1
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += state.number;
        },
        decrement: (state, action) => {
            state.count -= state.number;
        },
        updateNumber: (state, action) => {
            state.number = action.payload;
        },
        reset: (state, action) => {
            state.count = 0;
            state.number = 1;
        }
    }
});

export const { increment, decrement, updateNumber, reset } = counterSlice.actions;
export default counterSlice.reducer;
