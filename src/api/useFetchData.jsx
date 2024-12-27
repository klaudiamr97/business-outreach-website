import { useState, useEffect } from 'react';

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      })
      // .then((data)=>{
      //   if (isMounted){
      //     setData(data)
      //     setLoading(true);
      //     setTimeout(()=>{
      //       if (isMounted){
      //         setLoading(false);
      //       }
      //     }, 6000)
      //   }
      // })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [url]);
  return { data, loading, error };
}
