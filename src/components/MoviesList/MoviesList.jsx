import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <ul>
      {moviesList.map(movie => (
        <li key={movie.id}>
          <NavLink
            to={
              location.pathname === '/movies'
                ? `${movie.id}`
                : `movies/${movie.id}`
            }
            state={{ from: location }}
          >
            {movie.title ?? movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
