import React from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Series = () => {
  return (
    <div className="series">
      <Header />
      <div className="home-container">
        <Card title={'Most Popular Series'} />
        <Card title={'Top Rated Series'} />
        <Card title={'Latest Series'} />
      </div>
      <Footer />
    </div>
  );
};

export default Series;
