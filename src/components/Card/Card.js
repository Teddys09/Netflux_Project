import React, { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';
import AddToList from './AddToList';

const Card = ({ data }) => {
  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const [caretClickedLeft, setCaretClickedLeft] = useState(false);
  const [caretClickedRight, setCaretClickedRight] = useState(false);
  const [translateRight, setTranslateRight] = useState(0);
  const [cardHover, setCardHover] = useState('');

  const handleCaretClickLeft = () => {
    setCaretClickedLeft(!caretClickedLeft);
    if (translateRight === 0) {
      setTranslateRight((prev) => (prev = 0));
    } else {
      setTranslateRight((prev) => prev + 420);
    }
  };

  const handleCaretClickRight = () => {
    setCaretClickedRight(!caretClickedRight);
    if (translateRight < -1600) {
      setTranslateRight((prev) => (prev = 0));
    } else {
      setTranslateRight((prev) => prev + -420);
    }
  };
  const hangleHover = (e, item) => {
    if ((item.name || item.title) === e.target.id) {
      setCardHover(e.target.id);
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

            <div
              onMouseEnter={(e) => hangleHover(e, item)}
              onMouseLeave={() => setCardHover('')}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1)),url(${
                  item?.blob ? item.blob : baseUrl + item?.backdrop_path
                })`,
              }}
              alt={item.title || item.name}
              id={item.title || item.name}
              className="card-image"
            >
              {cardHover === (item.title || item.name) ? (
                <AddToList {...item} />
              ) : null}
            </div>
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
