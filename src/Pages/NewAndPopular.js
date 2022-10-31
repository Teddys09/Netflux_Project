import React from 'react';
import CallUseFetch from '../utils/CallUseFetch';
import Card from '../components/Card/Card';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { useSelector } from 'react-redux';

const NewAndPopular = () => {
  CallUseFetch();
  const media = useSelector((state) => state);
  const topRated = media.movies.filter((movie) =>
    movie.title.includes('Top Rated Movies')
  );
  const moviesAndSeries = media.moviesAndSeries.filter((movie) =>
    movie.title.includes('Most Popular on Netflux')
  );
  const latest = media.movies.filter((movie) =>
    movie.title.includes('Latest Movies')
  );

  return (
    <div className="Movies">
      <Header />
      <div className="home-container">
        <Card data={moviesAndSeries[0]} />
        <Card data={latest[0]} />
        <Card data={topRated[0]} />
      </div>
      <Footer />
    </div>
  );
};

export default NewAndPopular;
