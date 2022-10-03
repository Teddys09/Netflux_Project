import React from 'react';

import Card from '../components/Card/Card';

import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Movies = () => {
  return (
    <div className="Movies">
      <Header />
      <div className="home-container">
        <Card title="Latest Movie" />
        <Card title="Top Rated Movies" />
        <Card title="Upcoming Movies" />
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
