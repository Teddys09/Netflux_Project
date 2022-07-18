import React from 'react';
import { Link } from 'react-router-dom';

//<Link to="/">Home</Link>
//<Link to="/series">Series</Link>
//<Link to="/movies">Movies</Link>
//<Link to="/new">New & Popular</Link>
const MakeBrowseOpen = () => {
  return (
    <div className="browse-open">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/new">New & Popular</Link>
        </li>
        <li>
          <Link to="/myList">My List</Link>
        </li>
      </ul>
    </div>
  );
};

export default MakeBrowseOpen;
