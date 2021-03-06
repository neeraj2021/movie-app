import { actionTypes } from "./actionTypes";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchMovies = () => {
  return async (dispatch) => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    dispatch({ type: actionTypes.fetchAsyncMovies, payload: response.data });
  };
};

export const fetchShows = () => {
  return async (dispatch) => {
    const showText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${showText}&type=series`
    );
    dispatch({ type: actionTypes.fetchAsyncShows, payload: response.data });
  };
};

export const fetchMovieOrShowsDetails = (imdbID) => {
  return async (dispatch) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${imdbID}&Plot=full`
    );
    dispatch({
      type: actionTypes.fetchAsyncMovieOrShowsDetails,
      payload: response.data,
    });
  };
};

export const removeMovieOrShows = () => {
  return {
    type: actionTypes.removeSelectedMovieOrShows,
  };
};
