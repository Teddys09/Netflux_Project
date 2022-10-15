import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { VscInfo } from 'react-icons/vsc';
import { FaPlay } from 'react-icons/fa';
import LogoUser from '../../img/Netflix-avatar.png';
import { MakeCaretOpen } from './MakeCaretOpen';
import MakeBrowseOpen from './MakeBrowseOpen';

import { useSelector } from 'react-redux';

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [randomMovie, setRandomMovie] = useState('');
  const [randomImg, setRandomImg] = useState('');
  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const media = useSelector((state) => state.media);
  const moviesSeries = media.moviesAndSeries[0]?.data.results;

  const carretStyle = isHover
    ? { transform: 'rotate(180deg)', transition: 'all 0.3s ease-in-out' }
    : { transform: 'rotate(0deg)', transition: 'all 0.3s ease-in-out' };

  const carretStyle2 = isHover2
    ? { transform: 'rotate(180deg)', transition: 'all 0.3s ease-in-out' }
    : { transform: 'rotate(0deg)', transition: 'all 0.3s ease-in-out' };

  useEffect(() => {
    if (moviesSeries) {
      const random = Math.floor(Math.random() * moviesSeries.length);
      setRandomMovie(moviesSeries[random]);
    }
  }, [moviesSeries]);

  useEffect(() => {
    let holderMovie = randomMovie;

    if (holderMovie.blob) {
      setRandomImg(holderMovie.blob);
    } else {
      setRandomImg(baseUrl + holderMovie.backdrop_path);
    }
  }, [randomMovie]);

  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${randomImg})`,
  };
  return (
    <header>
      <div className="header" style={headerStyle}>
        <div className="header-banner">
          <div className="first-nav">
            <div className="header-logo">
              <Link to="/">NETFLUX</Link>
            </div>
            <div className="header-nav">
              <div
                className="browse"
                onMouseEnter={() => setIsHover2(!isHover2)}
              >
                Browse <AiFillCaretDown style={carretStyle2} />
              </div>
              <div onMouseLeave={() => setIsHover2(!isHover2)}>
                {isHover2 ? <MakeBrowseOpen /> : null}
              </div>

              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/newandpopular">New & Popular</Link>
              <Link to="/myList">My List</Link>
            </div>
          </div>
          <div className="second-nav">
            <div className="header-search">
              <FaSearch />
            </div>
            <Link to="/live">LIVE</Link>
            <Link to="/kids">Kids</Link>
            <div className="bell">
              <FaBell />
            </div>
            <div className="logo-caret" onMouseEnter={() => setIsHover(true)}>
              <div className="user-logo">
                <img src={LogoUser} alt="Netflix Logo" />
              </div>
              <div className="caret" style={carretStyle}>
                <AiFillCaretDown />
              </div>
            </div>
            <div onMouseLeave={() => setIsHover(false)}>
              {isHover ? <MakeCaretOpen /> : null}
            </div>
          </div>
        </div>
        <div className="description">
          <div className="description-title">
            <h1>{randomMovie.title || randomMovie.name}</h1>
          </div>
          <div className="overview">
            <p>{randomMovie.overview}</p>
          </div>
          <div className="buttons">
            <button className="play">
              <FaPlay /> Play
            </button>
            <button className="info">
              <VscInfo /> More Info
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
