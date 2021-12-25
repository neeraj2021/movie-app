import { combineReducers } from "redux";
import { movieReducer, movieOrShowsDetails } from "./movies";

const reducers = combineReducers({
  allMovies: movieReducer,
  fullDetails: movieOrShowsDetails,
});

export default reducers;
