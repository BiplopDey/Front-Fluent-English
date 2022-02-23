import { useEffect, useState } from "react";

export default function useFetchData(fetchPromise) {
  const [promise, setPromise] = useState(fetchPromise);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (promise) {
    fetchData();
    setPromise(null);
  }

  function fetchData() {
    setLoading(true);
    promise
      .then((dt) => {
        setData(dt);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return [data, error, loading, setPromise];
}
