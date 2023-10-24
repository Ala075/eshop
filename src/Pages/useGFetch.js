import { useState, useEffect } from "react";

function useGFetch(url) {
  const [data, setData] = useState(null);
  const [isSubmit, setisSubmit] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = () => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("can't fetch data from this ressource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisSubmit(false);
          setError(null);
        })
        .catch((err) => {
          setisSubmit(false);
          setError(err.message);
        });
    };
    return () => getData();
  }, [url]);

  return { data, isSubmit, error };
}
export default useGFetch;
