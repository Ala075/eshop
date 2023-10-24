import { useState } from "react";

function UsePFetch(url, options = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const submitForm = async (formData) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(formData),
        ...options,
      });

      if (!response.ok) {
        throw new Error("Can't fetch data to this resource");
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, submitForm };
}

export default UsePFetch;
