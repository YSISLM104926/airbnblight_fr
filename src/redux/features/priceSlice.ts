import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {
    price: "",
    priceTwo: ""
}

const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setPrice: (state, action: PayloadAction<string>) => {
            state.price = action.payload
        },
        setPriceTwo: (state, action: PayloadAction<string>) => {
            state.priceTwo = action.payload
        },
    }
})

export const {setPrice, setPriceTwo} = priceSlice.actions;
export default priceSlice.reducer;