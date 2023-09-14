import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGM2NjgwYzIxZDg4NGY1MTY2ZTYyNDExOTZhOTBjZiIsInN1YiI6IjY1MDM1NTk1ZWEzN2UwMDBjNjM4ZDE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKm8bnuFDavD2aez3FUu4T2GvcmHExki2MxhWs4WIB0';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${API_KEY}`,
};

axios.get(url, { headers });

export const fetchTrending = async () => {
  const resp = await axios.get(url, { headers });
  return resp.data;
};
