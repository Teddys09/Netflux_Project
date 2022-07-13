import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { HiOutlinePencil } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { BsQuestionCircle } from 'react-icons/bs';
import LogoUser from './img/Netflix-avatar.png';
import LogoUserGreen from './img/Netflix-avatar-green.png';
import LogoUserRed from './img/Netflix-avatar-red.png';
import LogoUserPinguin from './img/Netflix-avatar-pinguin.png';
import LogoUserKids from './img/kids-netflix.png';

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  const MakeCaretOpen = () => {
    return (
      <div className="caret-open">
        <ul>
          <li>
            {' '}
            <img src={LogoUserGreen} alt="Logo User Green" /> user2
          </li>
          <li>
            {' '}
            <img src={LogoUserRed} alt="Logo user Red" /> user3
          </li>
          <li>
            <img src={LogoUserPinguin} alt="Logo user Pinguin" /> user4
          </li>
          <li>
            <img className="kids-logo" src={LogoUserKids} alt="Logo Kids" />{' '}
            Kids
          </li>
          <li className="li-svg">
            <HiOutlinePencil /> <p>Manage Profiles</p>
          </li>
          <li className="li-breack"></li>
          <li className="li-svg">
            {' '}
            <VscAccount />
            <p>Account</p>
          </li>
          <li className="li-svg">
            <BsQuestionCircle />
            <p>Help Centre</p>
          </li>
          <li className="li-breack"></li>
          <li className="li-signout">
            <p>Sign out</p>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <header>
      <div className="header">
        <div className="first-nav">
          <div className="header-logo">
            <Link to="/">NETFLUX</Link>
          </div>
          <div className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/series">Series</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/new">New & Popular</Link>
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
            <img src={LogoUser} alt="Netflix Logo" />
          </div>
          <div className="caret">
            <AiFillCaretDown onMouseEnter={() => setIsHover(!isHover)} />
            {isHover ? <MakeCaretOpen /> : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
