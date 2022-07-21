import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';

const Card = ({ title, data }) => {
  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const [dataPopular, setDataPopular] = useState([]);
  const [dataLatestMovie, setDataLatestMovie] = useState([]);
  const [caretClickedLeft, setCaretClickedLeft] = useState(false);
  const [caretClickedRight, setCaretClickedRight] = useState(false);
  const [translateRight, setTranslateRight] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
        )
        .then((res) => {
          setDataPopular(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

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
        {dataPopular.map((item) => (
          <div
            className="image-container"
            key={item.id}
            style={containerImageStyle}
          >
            <p className="content-title">{item.title || item.name}</p>
            <img
              src={
                item.backdrop_path || item.poster_path
                  ? baseUrl + item.backdrop_path || item.poster_path
                  : ''
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
