import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGM2NjgwYzIxZDg4NGY1MTY2ZTYyNDExOTZhOTBjZiIsInN1YiI6IjY1MDM1NTk1ZWEzN2UwMDBjNjM4ZDE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKm8bnuFDavD2aez3FUu4T2GvcmHExki2MxhWs4WIB0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${API_KEY}`,
};

export const fetchTrending = async () => {
  const url = '/trending/all/day?language=en-US';
  const resp = await axios.get(url, { headers });
  return resp.data;
};

export const fetchMovie = async movieName => {
  const url = `/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1';`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};

export const fetchMovieDetails = async id => {
  const url = `/movie/${id}?language=en-US`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};

export const fetchMovieCredits = async id => {
  const url = `/movie/${id}/credits?language=en-US`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};

export const fetchMovieReviews = async id => {
  const url = `/movie/${id}/reviews?language=en-US&page=1`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};
