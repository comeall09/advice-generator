import { configureStore, createSlice } from "@reduxjs/toolkit";

const adviceSlice = createSlice({
  name: 'advice',
  initialState: {
    text: '',
    id: 0,
    isFetching: false
  },
  reducers: {
    setAdvice(state, action){
      state.text = action.payload
    },
    setAdviceNum(state, action){
      state.id = action.payload
    },
    setIsFetching(state, action){
      state.isFetching = action.payload
    }
  }
})

export const {setAdvice, setAdviceNum, setIsFetching} = adviceSlice.actions

const adviceReducer = adviceSlice.reducer

export const store = configureStore({
  reducer: {
    advice: adviceReducer
  }
})