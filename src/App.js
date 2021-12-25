import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchShows } from "./redux/action/index";

function App() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.allMovies.movie.Search) || [];
  const allShows = useSelector((state) => state.allMovies.show.Search) || [];
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, []);

  return (
    <div>
      <h1>App</h1>
      {allMovies.length > 0 ? (
        <ul>
          {allMovies.map((ele, index) => {
            return <li key={index}>{ele.Title}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
      {allShows.length > 0 ? (
        <ul>
          {allShows.map((ele, index) => {
            return <li key={index}>{ele.Title}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
