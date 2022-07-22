import React from 'react';
import LatestMovie from '../components/Card/LatestMovie';
import MoviesNowPlaying from '../components/Card/MoviesNowPlaying';
import TopRated from '../components/Card/TopRated';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Movies = () => {
  return (
    <div className="Movies">
      <Header />
      <div className="home-container">
        <LatestMovie title="Latest Movie" />
        <TopRated title="Top Rated Movies" />
        <MoviesNowPlaying title="Upcoming Movies" />
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
