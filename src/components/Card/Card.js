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
  // get the creen width
  const screenWidth = window.innerWidth;

  const handleCaretClickLeft = () => {
    setCaretClickedLeft(!caretClickedLeft);
    if (translateRight === 0) {
      setTranslateRight((prev) => (prev = 0));
    } else if (screenWidth < 700) {
      setTranslateRight((prev) => prev + 210);
    } else {
      setTranslateRight((prev) => prev + 420);
    }
  };

  const handleCaretClickRight = () => {
    setCaretClickedRight(!caretClickedRight);
    if (translateRight < -1600) {
      setTranslateRight((prev) => (prev = 0));
    } else if (screenWidth < 700) {
      setTranslateRight((prev) => prev + -210);
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
          <AiFillCaretLeft
            role={data?.title + 'left'}
            onClick={() => handleCaretClickLeft()}
          />
        </div>
        {data?.data.results.map((item) => (
          <div
            className="image-container"
            key={item.id}
            style={containerImageStyle}
          >
            <div
              onMouseEnter={(e) => hangleHover(e, item)}
              onMouseLeave={() => setCardHover('')}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0)),url(${
                  item?.blob ? item.blob : baseUrl + item?.backdrop_path
                })`,
              }}
              alt={item.title || item.name}
              id={item.title || item.name}
              className="card-image"
            >
              <p className="content-title">{item.title || item.name}</p>
              {cardHover === (item.title || item.name) ? (
                <AddToList {...item} />
              ) : null}
            </div>
          </div>
        ))}
        <div className="caret-right">
          <AiFillCaretRight
            role={data?.title + 'right'}
            onClick={() => handleCaretClickRight()}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
