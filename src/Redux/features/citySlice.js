import { createSlice } from '@reduxjs/toolkit';
import { Cities } from '../../utills/dummydata';

const initialState = {
    cityInfo: Cities[0],
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
