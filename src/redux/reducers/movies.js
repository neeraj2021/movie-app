import { actionTypes } from "../action/actionTypes";
const initialState = {
  movie: [],
  show: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.fetchAsyncMovies:
      return { ...state, movie: payload };
    case actionTypes.fetchAsyncShows:
      return { ...state, show: payload };
    default:
      return state;
  }
};
