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

export const movieOrShowsDetails = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.fetchAsyncMovieOrShowsDetails:
      return { ...state, details: payload };
    case actionTypes.removeSelectedMovieOrShows:
      return {};
    default:
      return state;
  }
};
