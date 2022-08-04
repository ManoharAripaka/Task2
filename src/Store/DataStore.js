import { createSlice } from "@reduxjs/toolkit";
const DataStore = createSlice({
  name: "data",
  initialState: {
    who: "all",
    cat: "Trending",
    price: 999,
    position: {},
    cardData: {},
    display: "none",
    data: [],
    title: "Christmas Gifts",
  },
  reducers: {
    updateWho: (state, action) => {
      state.who = action.payload;
    },
    updateCat: (state, action) => {
      state.cat = action.payload;
    },
    updatePrice: (state, action) => {
      state.price = action.payload;
    },
    updatePosition: (state, action) => {
      state.position = action.payload;
    },
    updateCardData: (state, action) => {
      state.cardData = action.payload;
    },
    updateDisplay: (state, action) => {
      state.display = action.payload;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});
export const {
  updateWho,
  updateCat,
  updatePrice,
  updatePosition,
  updateCardData,
  updateDisplay,
  updateData,
  updateTitle,
} = DataStore.actions;
export default DataStore.reducer;
