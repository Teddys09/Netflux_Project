import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import CallUseFetch from '../utils/CallUseFetch';
const Home = () => {
  const media = useSelector((state) => state.media);
  CallUseFetch();

  const topRatedM = media.movies.filter((movie) =>
    movie.title.includes('Top Rated Movies')
  );
  const latestM = media.movies.filter((movie) =>
    movie.title.includes('Latest Movies')
  );
  const mostS = media.series.filter((series) =>
    series.title.includes('Most Popular Series')
  );

  if (
    media.movies.length === 0 ||
    media.series.length === 0 ||
    media.moviesAndSeries.length === 0
  ) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="home">
        <Header />
        <div className="home-container">
          <Card data={media.moviesAndSeries[0]} />
          <Card data={mostS[0]} />
          <Card data={topRatedM[0]} />
          <Card data={latestM[0]} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
