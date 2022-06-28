import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoriteCoins: ['bitcoin','tether'],
}

export const favouriteSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    addToFavorite: (state,action) => {
    state.favoriteCoins=[...state.favoriteCoins,action.payload]
    },
    removefromFavorite: (state,action) => {
      state.favoriteCoins=state.favoriteCoins.filter(item=>item !== action.payload)
    },
   
  },
})

export const { addToFavorite, removefromFavorite } = favouriteSlice.actions

export const items=(state) => state.coins.favoriteCoins

export default favouriteSlice.reducer