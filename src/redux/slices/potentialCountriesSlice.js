import { createSlice } from "@reduxjs/toolkit";




export const potentialCountriesSlice = createSlice({
    name: 'potentialCountries',
    initialState: {
        value: {
            name: [{
                common: 'America'
            }],
        },
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
        deletePotentialCountries: (state) => {
            state.value = null;
        }
    }
})