import { useEffect, useState } from "react";

export default function useFetchData(fetchPromise) {
  const [promise, setPromise] = useState(fetchPromise);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(() =>
    fetchPromise ? null : "no promise given"
  );

  if (promise) {
    fetchData();
    setPromise(null);
  }

  function fetchData() {
    promise
      .then((dt) => {
        setData(dt);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return [loading, data, error, setPromise];
}
