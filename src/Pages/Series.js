import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import CallUseFetch from '../utils/CallUseFetch';

const Series = () => {
  CallUseFetch();
  const media = useSelector((state) => state.media);
  const topRated = media.series.filter((series) =>
    series.title.includes('Top Rated Series')
  );
  const latest = media.series.filter((series) =>
    series.title.includes('Latest Series')
  );
  const most = media.series.filter((series) =>
    series.title.includes('Most Popular Series')
  );
  return (
    <div className="series">
      <Header />
      <div className="home-container">
        <Card data={most[0]} />
        <Card data={topRated[0]} />
        <Card data={latest[0]} />
      </div>
      <Footer />
    </div>
  );
};

export default Series;
