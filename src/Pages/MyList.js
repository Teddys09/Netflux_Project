import React from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const MyList = () => {
  return (
    <div className="my-list">
      <Header />
      <div className="home-container">
        <Card title={'Top Rated Series'} />
        <Card title={'My List'} />
        <Card title={'Movies'} />
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
