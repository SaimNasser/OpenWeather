import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
    day: { name: moment().format('dddd') },
};
export const weekdaySlice = createSlice({
    name: 'Weekday',
    initialState,
    reducers: {
        setWeekday: (state, action) => {
            state.day = action.payload;
        },
    },
});

export const { setWeekday } = weekdaySlice.actions;
export const selectWeekday = state => state.Weekday.day;
export default weekdaySlice.reducer;
