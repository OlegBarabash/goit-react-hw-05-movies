import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Home } from 'pages/Home';
import { Layout } from './Layout/Layout';

// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
