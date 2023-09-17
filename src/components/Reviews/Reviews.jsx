import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviws, setMovieReviws] = useState(null);

  useEffect(() => {
    async function fechMovieReviews() {
      try {
        const results = await fetchMovieReviews(movieId);
        setMovieReviws(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fechMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReviws &&
        (!movieReviws.results.length ? (
          <p>We don't hawe any reviews for this movie.</p>
        ) : (
          <ul>
            {movieReviws.results.map(rev => (
              <li key={rev.id}>
                <h2>{rev.author}</h2>
                <p>{rev.content}</p>
              </li>
            ))}
          </ul>
        ))}
      {/* {!movieReviws ? (
        <p>We don't hawe any reviews for this movie.</p>
      ) : (
        <ul>
          {movieReviws.results.map(rev => (
            <li key={rev.id}>
              <h2>{rev.author}</h2>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
};

export default Reviews;
