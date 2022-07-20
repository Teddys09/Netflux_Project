import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';

const SeriesPopular = ({ title }) => {
  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const [caretClickedLeft, setCaretClickedLeft] = useState(false);
  const [caretClickedRight, setCaretClickedRight] = useState(false);
  const [translateRight, setTranslateRight] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
        )
        .then((res) => {
          setData(res.data.results);
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
        {data.map((item) => (
          <div
            className="image-container"
            key={item.id}
            style={containerImageStyle}
          >
            <img
              src={baseUrl + item.backdrop_path}
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

export default SeriesPopular;
