import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function fechMovieDetails() {
      try {
        const results = await fetchMovieDetails(movieId);
        setMovieInfo(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fechMovieDetails();
  }, [movieId]);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <div>
      {movieInfo && (
        <div>
          <img
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <h1>{movieInfo.title}</h1>
            <p>User Score: {movieInfo.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movieInfo.overview}</p>
            <h4>Genres</h4>

            {movieInfo.genres.map(genr => (
              <span key={genr.id}>{genr.name} </span>
            ))}
          </div>
          <p>Additional information</p>
          <p>Cast</p>
          <p>Reviews</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};
