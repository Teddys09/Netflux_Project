import React from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <Card title="Most Popular on Netflux" />
        <Card title="Most Popular Series" />
        <Card title="Top Rated Movies" />
        <Card title="Latest Movies" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
