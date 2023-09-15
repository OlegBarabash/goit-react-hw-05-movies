import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrending = async () => {
      try {
        setLoading(true);
        const { results } = await fetchTrending();
        setTrending(results);
        console.log('resp', results);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };

    getTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trending.map(movie => (
          <li key={movie.id}>
            <a href="">{movie.title ?? movie.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
