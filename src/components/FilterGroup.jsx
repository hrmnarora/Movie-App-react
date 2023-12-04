import React from "react";
import "./MovieList.css";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align_center movie-filter">
      {ratings.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie-filter-item active"
              : "movie_filter_item"
          }
          key={rate}
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
