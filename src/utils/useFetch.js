import { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMedia } from '../utils/store';

/**
 * Fetch data from an API Using Axios
 * @param {String} url
 * @param {String} title
 * @returns {Object} dispatch
 */

const useFetch = (url, title) => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.media);

  useEffect(() => {
    if (media?.movies?.length === 0) {
      Axios.get(url)
        .then((response) => {
          let data = response.data;

          dispatch(addMedia({ title, data }));
          return data;
        })
        .then((data) => {
          for (let i = 0; i < data.results.length; i++) {
            if (
              data.results[i].backdrop_path &&
              data.results[i].backdrop_path.length > 0
            ) {
              fetchImage(
                data.results[i].backdrop_path,
                data.results[i],
                data,
                data.results.length,
                i
              );
            } else {
              fetchImage(data.results[i].poster_path, data.results[i], data);
            }
          }
          return data;
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [url, title]);

  const fetchImage = async (path, data, allData, dataLenght, i) => {
    await Axios.get(`https://image.tmdb.org/t/p/original${path}`, {
      responseType: 'blob',
    })

      .then((response) => {
        // fix type error
        let blob = new Blob([response.data], { type: 'image/jpeg' });
        let url = URL.createObjectURL(blob);
        let dataCopy = { ...data };

        dataCopy.blob = url;
        let allDataCopy = { ...allData };
        allDataCopy.results[i] = dataCopy;

        // fix TypeError: Cannot assign to read only property '13' of object '[object Array]'

        // data.blob = URL.createObjectURL(response.data);
        if (i === dataLenght - 1) {
          let allDataCopyParse = JSON.parse(JSON.stringify(allDataCopy));

          dispatch(addMedia({ title, data: allDataCopyParse }));
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };
};

export default useFetch;
