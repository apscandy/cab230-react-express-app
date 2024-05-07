import { useState, useEffect, useCallback } from "react";

export default function useCountry() {
  const [countries, setCountries] = useState(JSON.parse(sessionStorage.getItem("countries"))||[]);
  const [errors, setErrors] = useState("");

  // get all counties from the remote api end point
  const fetchCountries = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/countries`
      );
      const json = await response.json();
      if (response.status === 400) {
        setErrors(json.message);
        return;
      }
      if (response.status === 200) {
        setCountries(json);
        sessionStorage.setItem("countries",JSON.stringify(json))
        return;
      }
    } catch {
      setErrors("Server Error");
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("countries")){
        fetchCountries();
    }
  }, [fetchCountries]);

  return { countries, errors };
}
