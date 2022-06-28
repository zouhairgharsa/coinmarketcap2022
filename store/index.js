import { configureStore } from '@reduxjs/toolkit'
import  favouriteReducer from  '../features/favoriteSlice'
export const store = configureStore({
  reducer: {
        coins: favouriteReducer,

  },
})