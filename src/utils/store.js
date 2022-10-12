import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice of state for new employee data and actions to add user data
const data = createSlice({
  name: 'media',
  initialState: {
    movies: [],
    series: [],
    moviesAndSeries: [],
  },
  reducers: {
    addMedia(state, action) {
      if (
        action.payload.title.includes('Movies') &&
        !action.payload.title.includes('Series')
      ) {
        addItem(state.movies, action.payload);
      }
      if (
        action.payload.title.includes('Series') &&
        !action.payload.title.includes('Movies')
      ) {
        addItem(state.series, action.payload);
      }
      if (action.payload.title.includes('Netflux')) {
        addItem(state.moviesAndSeries, action.payload);
      }
    },
  },
});

export const { addMedia } = data.actions;

export const store = configureStore({
  reducer: {
    media: data.reducer,
  },
});

function addItem(store, item) {
  // fix TypeError: Cannot assign to read only property '16' of object '[object Array]'
  let itemCopy = JSON.parse(JSON.stringify(item));

  let index = store.findIndex((x) => x.title === itemCopy.title);

  if (index === -1) {
    store.push(itemCopy);
  } else {
    store[index] = itemCopy;
  }
}
