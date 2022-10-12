import React, { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';

const Card = ({ data }) => {
  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const [caretClickedLeft, setCaretClickedLeft] = useState(false);
  const [caretClickedRight, setCaretClickedRight] = useState(false);
  const [translateRight, setTranslateRight] = useState(0);

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
      <h2 className="card-title">{data?.title}</h2>
      <div className="card-images">
        <div className="caret-left">
          <AiFillCaretLeft onClick={() => handleCaretClickLeft()} />
        </div>
        {data?.data.results.map((item) => (
          <div
            className="image-container"
            key={item.id}
            style={containerImageStyle}
          >
            <p className="content-title">{item.title || item.name}</p>
            <img
              src={item?.blob ? item.blob : baseUrl + item?.backdrop_path}
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
