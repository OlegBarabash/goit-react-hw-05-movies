import React from 'react';
import { NavLink } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  return (
    <ul>
      {moviesList.map(movie => (
        <li key={movie.id}>
          <NavLink to={`movies/${movie.id}`}>
            {movie.title ?? movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
