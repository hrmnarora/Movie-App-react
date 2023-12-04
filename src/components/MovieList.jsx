import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({type, title, emoji}) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filterMovies, setFilterMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if(sort.by !== "Default") {
      const sortedMovies = _.orderBy(filterMovies,[sort.by],[sort.order])
      setFilterMovies(sortedMovies)
    }else{
    }
  },[sort])

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=f2cf45c8e33696426ee434fdc7c691ae`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie-list" id={type}>
      <header className="align_center movie-list-header">
        <h2 className="align_center movie-list-heading">
          {title} <img src={emoji} className="navbar-emoji" alt={`${emoji} icon`} />
        </h2>

        <div className="align_center movie-list-fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            onChange={handleSort}
            value={sort.by}
            className="movie-sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            onChange={handleSort}
            value={sort.order}
            className="movie-sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie-cards">
        {filterMovies.map((movie) => (
          <MovieCard
            Date={movie.release_date}
            Title={movie.original_title}
            Rating={movie.vote_average}
            Description={movie.overview.slice(0, 100) + "..."}
            path={movie.poster_path}
            key={movie.id}
            id={movie.id}
          />
        ))}
        <MovieCard />
      </div>
    </section>
  );
};

export default MovieList;
