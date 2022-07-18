import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = (title) => {
  const baseUrl = 'http://image.tmdb.org/t/p/original';
  const [dataPopular, setDataPopular] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_PRIVATE_KEY}&language=en-US&page=1`
        )
        .then((res) => {
          setDataPopular(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);
  console.log(dataPopular);
  console.log(title);
  //<div className="card-container">
  //  <div className="card-header">
  //   <p>genre</p>
  //  </div>
  //  <div className="card-body">
  //    <div className="card"></div>
  //  </div>
  //  </div>

  return (
    <div className="card-container ">
      <h2 className="card-title">{title.title}</h2>
      <div className="card-images">
        {dataPopular.map((item) => (
          <div className="image-container" key={item.id}>
            <img
              src={baseUrl + item.backdrop_path}
              alt={item.title || item.name}
              className="card-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
