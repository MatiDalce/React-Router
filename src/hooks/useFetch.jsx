import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        console.error(err);
        setData(null);
      });
  }, [url, JSON.stringify(options)]); 

  return data;
};

export default useFetch;
