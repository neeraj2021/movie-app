import { combineReducers } from "redux";
import { movieReducer } from "./movies";

const reducers = combineReducers({
  allMovies: movieReducer,
});
export default reducers;
