import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function fechMovieReviews() {
      try {
        const results = await fetchMovieCredits(movieId);
        console.log('setMovieReviws', results);
        setMovieCast(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fechMovieReviews();
  }, [movieId]);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <>
      {!movieCast ? (
        <p>We don't hawe any cast info for this movie.</p>
      ) : (
        <ul>
          {movieCast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                width={150}
                alt="Actor"
              />
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
