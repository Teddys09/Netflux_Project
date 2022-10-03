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
import useFetch from '../../utils/useFetch';

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [randomMovie, setRandomMovie] = useState('');

  const baseUrl = 'http://image.tmdb.org/t/p/original';

  const popularSeriesAndMovies = useFetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
  );

  useEffect(() => {
    if (popularSeriesAndMovies) {
      const random = Math.floor(
        Math.random() * popularSeriesAndMovies.results.length
      );
      setRandomMovie(popularSeriesAndMovies.results[random]);
    }
  }, [popularSeriesAndMovies]);

  const headerStyle = {
    backgroundImage: `url(${baseUrl}${randomMovie.backdrop_path})`,
  };
  return (
    <header>
      <div
        className="header"
        style={
          randomMovie.backdrop_path
            ? headerStyle
            : {
                backgroundImage: 'none',
              }
        }
      >
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
              <div className="caret">
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
