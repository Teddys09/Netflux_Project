import React from 'react';
import Card from '../components/Card/Card';
import LatestMovie from '../components/Card/LatestMovie';
import SeriesPopular from '../components/Card/SeriesPopular';
import TopRated from '../components/Card/TopRated';
import Footer from '../components/Footer';

import Header from '../components/Header/Header';
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <Card title="Most Popular Movies" />
        <SeriesPopular title="Most Popular Series" />
        <TopRated title="Top Rated Movies" />
        <LatestMovie title="Latest Movie " />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
