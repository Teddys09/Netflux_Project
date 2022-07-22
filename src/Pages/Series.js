import React from 'react';
import SeriesLatest from '../components/Card/SeriesLatest';
import SeriesPopular from '../components/Card/SeriesPopular';
import SeriesTopRated from '../components/Card/SeriesTopRated';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Series = () => {
  return (
    <div className="series">
      <Header />
      <div className="home-container">
        <SeriesPopular title={'Most Popular Series'} />
        <SeriesTopRated title={'Top Rated Series'} />
        <SeriesLatest title={'Latest Series'} />
      </div>
      <Footer />
    </div>
  );
};

export default Series;
