import React from 'react';
import Card from '../components/Card/Card';

import Header from '../components/Header/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />

      <Card title="Most Popular" />
    </div>
  );
};

export default Home;
