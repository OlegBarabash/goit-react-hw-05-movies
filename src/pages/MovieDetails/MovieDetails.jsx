import { useState, useEffect, Suspense, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { BsArrowLeft } from 'react-icons/bs';
import { AddInfoDiv, MainInfoContainer } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

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
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <NavLink to={backLinkHref.current}>
        <BsArrowLeft /> Go back
      </NavLink>
      {movieInfo && (
        <div>
          <MainInfoContainer>
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
          </MainInfoContainer>
          <AddInfoDiv>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </AddInfoDiv>

          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};
