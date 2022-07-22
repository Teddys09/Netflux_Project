import React from 'react';
import Card from '../components/Card/Card';
import MoviesNowPlaying from '../components/Card/MoviesNowPlaying';
import SeriesTopRated from '../components/Card/SeriesTopRated';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const MyList = () => {
  return (
    <div className="my-list">
      <Header />
      <div className="home-container">
        <SeriesTopRated title={'Top Rated Series'} />
        <Card title={'My List'} />
        <MoviesNowPlaying title={'Movies'} />
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
