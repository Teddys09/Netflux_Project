import { useEffect, useState } from 'react';
import Axios from 'axios';

/**
 * Fetch data from an API Using Axios
 * @param {String} url
 * @returns {Object} data
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [url]);
  return data;
};

export default useFetch;
