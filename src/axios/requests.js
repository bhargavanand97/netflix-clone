const API_KEY = '42b4c944ada62c91377835bcd57e1334';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&language=en-US`,
};

export default requests;
