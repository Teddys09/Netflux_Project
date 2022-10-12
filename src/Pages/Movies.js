import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../components/Card/Card';
import CallUseFetch from '../utils/CallUseFetch';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Movies = () => {
  CallUseFetch();
  const media = useSelector((state) => state.media);
  const topRated = media.movies.filter((movie) =>
    movie.title.includes('Top Rated Movies')
  );
  const latest = media.movies.filter((movie) =>
    movie.title.includes('Latest Movies')
  );
  const upcoming = media.movies.filter((movie) =>
    movie.title.includes('Upcoming Movies')
  );
  return (
    <div className="Movies">
      <Header />
      <div className="home-container">
        <Card data={latest[0]} />
        <Card data={topRated[0]} />
        <Card data={upcoming[0]} />
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
