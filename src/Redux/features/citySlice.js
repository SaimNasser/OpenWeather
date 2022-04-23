import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cityInfo: null,
};
export const citySlice = createSlice({
    name: 'City',
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.cityInfo = action.payload;
        },
    },
});

export const { setCity } = citySlice.actions;
export const selectCity = state => state.City.cityInfo;
export default citySlice.reducer;
