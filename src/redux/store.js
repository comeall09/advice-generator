import { configureStore, createSlice } from "@reduxjs/toolkit";

const adviceSlice = createSlice({
  name: 'advice',
  initialState: {
    text: '',
    isFetching: false
  },
  reducers: {
    setAdvice(state, action){
      state.text = action.payload
    },
    setIsFetching(state, action){
      state.isFetching = action.payload
    }
  }
})

export const {setAdvice, setIsFetching} = adviceSlice.actions

const adviceReducer = adviceSlice.reducer

export const store = configureStore({
  reducer: {
    advice: adviceReducer
  }
})