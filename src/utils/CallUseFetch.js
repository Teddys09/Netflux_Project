import useFetch from './useFetch';

const CallUseFetch = () => {
  useFetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'Latest Series'
  );

  useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'Most Popular Series'
  );
  useFetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'Top Rated Series'
  );
  useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'Latest Movies'
  );
  useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'popularMovies'
  );
  useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'Top Rated Movies'
  );
  useFetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'Most Popular on Netflux'
  );
  useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`,
    'Upcoming Movies'
  );
};

export default CallUseFetch;
