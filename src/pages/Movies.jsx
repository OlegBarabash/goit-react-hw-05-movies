import { MoviesList } from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovie } from 'services/api';

const Movies = () => {
  const [searchResoult, setSearchResoult] = useState([]);
  const [searching, setSearching] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    const getMovieList = async () => {
      try {
        setSearching(false);
        const { results } = await fetchMovie(movieName);
        setSearchResoult(results);
      } catch (error) {
        console.log('error', error);
      } finally {
        setSearching(true);
      }
    };
    if (movieName !== '') {
      getMovieList();
    }
  }, [movieName]);

  const changeMovieName = eve => {
    eve.preventDefault();
    const name = eve.target[0].value;
    const nextName = name !== '' ? { name } : {};
    setSearchParams(nextName);
  };

  return (
    <>
      <SearchForm handlerSubmit={changeMovieName} />
      {searching && searchResoult.length === 0 ? (
        <p>No movies found!</p>
      ) : (
        <MoviesList moviesList={searchResoult} />
      )}
    </>
  );
};

export default Movies;
