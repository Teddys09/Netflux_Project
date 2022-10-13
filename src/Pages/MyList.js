import React, { useState } from 'react';
import CallUseFetch from '../utils/CallUseFetch';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { useSelector } from 'react-redux';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';

const MyList = () => {
  CallUseFetch();
  const userList = useSelector((state) => state.media.userList);

  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const [caretClickedLeft, setCaretClickedLeft] = useState(false);
  const [caretClickedRight, setCaretClickedRight] = useState(false);
  const [translateRight, setTranslateRight] = useState(0);

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
  const containerImageStyle = {
    transform: `translateX(${
      caretClickedRight ? `${translateRight}%` : `${translateRight}%`
    })`,
  };
  if (userList.length === 0) {
    return (
      <div className="my-list">
        <Header />
        <div className="my-list-container">
          <h2 className="my-list-title">My List</h2>
          <div className="my-list-content">
            <p className="my-list-text">You have no items in your list</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="my-list">
        <Header />
        <div className="home-container">
          <div className="card-container ">
            <h2 className="card-title-list">Your List</h2>
            <div className="card-images">
              <div className="caret-left">
                <AiFillCaretLeft onClick={() => handleCaretClickLeft()} />
              </div>
              {userList.map((item) => (
                <div
                  className="image-container"
                  key={item.id}
                  style={containerImageStyle}
                >
                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1)),url(${
                        baseUrl + item.poster_path
                      })`,
                    }}
                    alt={item.title || item.name}
                    id={item.title || item.name}
                    className="card-list"
                  ></div>
                </div>
              ))}
              <div className="caret-right">
                <AiFillCaretRight onClick={() => handleCaretClickRight()} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default MyList;
