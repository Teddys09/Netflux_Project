import React, { useEffect, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';
import useFetch from '../../utils/useFetch';

const Card = ({ title }) => {
  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const [caretClickedLeft, setCaretClickedLeft] = useState(false);
  const [caretClickedRight, setCaretClickedRight] = useState(false);
  const [translateRight, setTranslateRight] = useState(0);
  const [data, setData] = useState(null);

  const latestSeries = useFetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );
  const popularSeries = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );
  const topRatedSeries = useFetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );
  const latestMovies = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );
  const popularMovies = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );
  const topRatedMovies = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );
  const popularSeriesAndMovies = useFetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );

  useEffect(() => {
    if (title === 'Latest Series') {
      setData(latestSeries);
    } else if (title === 'Most Popular Series') {
      setData(popularSeries);
    } else if (title === 'Top Rated Series') {
      setData(topRatedSeries);
    } else if (title === 'Latest Movies') {
      setData(latestMovies);
    } else if (title === 'Most Popular Movies') {
      setData(popularMovies);
    } else if (title === 'Top Rated Movies') {
      setData(topRatedMovies);
    } else if (title === 'Most Popular on Netflux') {
      setData(popularSeriesAndMovies);
    }
  }, [
    title,
    latestSeries,
    popularSeries,
    topRatedSeries,
    latestMovies,
    popularMovies,
    topRatedMovies,
    popularSeriesAndMovies,
  ]);

  const handleCaretClickLeft = () => {
    setCaretClickedLeft(!caretClickedLeft);
    if (translateRight === 0) {
      setTranslateRight((prev) => (prev = 0));
    } else {
      setTranslateRight((prev) => prev + 400);
    }
  };

  const handleCaretClickRight = () => {
    setCaretClickedRight(!caretClickedRight);
    if (translateRight === -1600) {
      setTranslateRight((prev) => (prev = 0));
    } else {
      setTranslateRight((prev) => prev + -400);
    }
  };

  const containerImageStyle = {
    transform: `translateX(${
      caretClickedRight ? `${translateRight}%` : `${translateRight}%`
    })`,
  };

  return (
    <div className="card-container ">
      <h2 className="card-title">{title}</h2>
      <div className="card-images">
        <div className="caret-left">
          <AiFillCaretLeft onClick={() => handleCaretClickLeft()} />
        </div>
        {data?.results.map((item) => (
          <div
            className="image-container"
            key={item.id}
            style={containerImageStyle}
          >
            <p className="content-title">{item.title || item.name}</p>
            <img
              src={
                item.backdrop_path || item.poster_path
                  ? `${baseUrl}${item.backdrop_path || item.poster_path}`
                  : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
              }
              alt={item.title || item.name}
              className="card-image"
            />
          </div>
        ))}
        <div className="caret-right">
          <AiFillCaretRight onClick={() => handleCaretClickRight()} />
        </div>
      </div>
    </div>
  );
};

export default Card;
