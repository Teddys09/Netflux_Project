import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { VscInfo } from 'react-icons/vsc';
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';
//import CartContext from './CartContext';

import LogoUser from './img/Netflix-avatar.png';

import { MakeCaretOpen } from './components/MakeCaretOpen';
import MakeBrowseOpen from './components/MakeBrowseOpen';

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [randomMovie, setRandomMovie] = useState('');
  const [headerData, setHeaderData] = useState([]);
  const [baseUrl, setBaseUrl] = useState('http://image.tmdb.org/t/p/original');

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
        )
        .then((res) => {
          setHeaderData(res.data.results);
          setRandomMovie(
            res.data.results[
              Math.floor(Math.random() * res.data.results.length)
            ]
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);
  console.log(headerData);
  // /mrSY8HTkW4Hgu4FYqu0KQ7LEWbG.jpg
  // http://image.tmdb.org/t/p/w500/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg

  const headerStyle = {
    backgroundImage: `url(${baseUrl}${randomMovie.backdrop_path})`,
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
              <p className="browse">
                Browse{' '}
                <AiFillCaretDown onMouseEnter={() => setIsHover2(!isHover2)} />
              </p>
              {isHover2 ? <MakeBrowseOpen /> : null}

              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/new">New & Popular</Link>
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
            <div className="user-logo">
              <img
                src={LogoUser}
                alt="Netflix Logo"
                onMouseEnter={() => setIsHover(!isHover)}
              />
              {isHover ? <MakeCaretOpen /> : null}
            </div>
            <div className="caret">
              <AiFillCaretDown onMouseEnter={() => setIsHover(!isHover)} />
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
