import React from 'react';
import { Link } from 'react-router-dom';

const MakeBrowseOpen = () => {
  return (
    <div className="browse-open">
      <div className="invisible-div"></div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/series">
          <li>Series</li>
        </Link>
        <Link to="/movies">
          <li>Movies</li>
        </Link>
        <Link to="/new">
          <li>New & Popular</li>
        </Link>
        <Link to="/myList">
          <li>My List</li>
        </Link>
      </ul>
    </div>
  );
};

export default MakeBrowseOpen;
