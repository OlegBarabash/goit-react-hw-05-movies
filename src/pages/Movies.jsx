import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { fetchMovie } from 'services/api';

export const Movies = () => {
  const [searchResoult, setSearchResoult] = useState([]);
  const [movieName, setMovieName] = useState('');

  const searchMovie = async eve => {
    eve.preventDefault();

    try {
      const { results } = await fetchMovie(movieName);
      setSearchResoult(results);
    } catch (error) {
      console.log('error', error);
    }
    // try {
    //   setLoading(true);
    //   const { results } = await fetchMovie();
    //   setSearchResoult(results);
    //   console.log('resp', results);
    // } catch (error) {
    //   console.log('error', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const changeMovieName = name => {
    console.log('name', name);
    setMovieName(name);
  };

  return (
    <>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          onChange={evt => changeMovieName(evt.target.value)}
        />
        <button>Search</button>
      </form>
      <MoviesList moviesList={searchResoult} />
    </>
  );
};
