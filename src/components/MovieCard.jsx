import React from "react";
import "./MovieCard.css";
import Star from "../assets/Star.png";
import { Link } from "react-router-dom";

const MovieCard = ({Title,Date,Rating,id,Description,path}) => {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${path}`} className="movie-poster" />
      <div className="movie-details">
        <h3 className="movie-details-heading">{Title}</h3>
        <div className="movie-date-rate">
          <p>{Date}</p>
          <p>
            {Rating} <img src={Star} alt="rating-icon" className="card-emoji" />
          </p>
        </div>
        <p className="movie-description">
          {Description}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
