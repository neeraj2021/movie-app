import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieOrShowsDetails,
  removeMovieOrShows,
} from "../../redux/action/index";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const fullDetail = useSelector((state) => state.fullDetails.details);

  useEffect(() => {
    dispatch(fetchMovieOrShowsDetails(imdbID));
    return dispatch(removeMovieOrShows());
  }, [dispatch, imdbID]);

  return (
    <>
      {fullDetail !== undefined ? (
        <>
          <div className="section-left">
            <div className="movie-title">{fullDetail.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {fullDetail.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {fullDetail.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {fullDetail.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {fullDetail.Year}
              </span>
            </div>

            <div className="movie-plot">{fullDetail.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{fullDetail.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{fullDetail.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{fullDetail.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{fullDetail.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{fullDetail.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={fullDetail.Poster} alt={fullDetail.Title} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MovieDetail;
