import { createSlice } from "@reduxjs/toolkit";
import { fetchUsrs } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchUsrs.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsrs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsrs.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const userReducer = userSlice.reducer;